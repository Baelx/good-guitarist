<?php

namespace GoodGuitarist\Custom;

/**
 * Custom
 * use it to write your custom functions.
 */
class PostTypes {
	/**
     * register default hooks and actions for WordPress
     * @return
     */
	public function register() {
		add_action( 'init', [ $this, 'custom_post_type' ], 10 , 4 );
		add_action( 'after_switch_theme', [ $this, 'rewrite_flush' ] );
        add_filter( 'register_post_type_args', [ $this, 'register_post_type_args' ], 10, 2 );
		add_filter( 'the_content', [ $this, 'youtube_post_content' ] );
	}

  /**
    * Create Custom Post Types
    * @return The registered post type object, or an error object
    */
    public function custom_post_type() {
		/**
		 * Add the post types and their details
		 */
		$custom_posts = [
			[
				'slug' => 'cta',
				'singular' => 'Call to Action',
				'plural' => 'Call to Actions',
				'menu_icon' => 'dashicons-admin-customizer',
				'menu_position' => 18,
				'text_domain' => 'good-guitarist',
				'supports' => [ 'title', 'editor', 'thumbnail' , 'excerpt', 'author', 'custom-fields'],
				'description' => 'Call to Action Custom Post Type',
				'public' => true,
				'publicly_queryable' => true,
				'show_ui' => true,
				'show_in_menu' => true,
				'query_var' => true,
				'capability_type' => 'post',
				'has_archive' => true,
				'hierarchical' => false,
				'show_in_rest' => true,
			],
			[
				'slug' => 'youtube-post',
				'singular' => 'Youtube Post',
				'plural'  => 'Youtube Posts',
				'menu_icon' => 'dashicons-video-alt3',
				'menu_position' => 18,
				'text_domain' => 'awps',
				'supports' => [ 'title', 'editor', 'thumbnail' , 'excerpt', 'author', 'custom-fields'],
				'description' => 'Youtube Post Custom Post Type',
				'public' => true,
				'publicly_queryable' => true,
				'show_ui' => true,
				'show_in_menu' => true,
				'query_var' => true,
				'capability_type' => 'post',
				'has_archive' => true,
				'hierarchical' => false,
				'show_in_rest' => true,
			],
		];

		foreach ( $custom_posts as $custom_post ) {
			$labels = [
				'name'               => _x( $custom_post['plural'], 'post type general name', $custom_post['text_domain'] ),
				'singular_name'      => _x( $custom_post['singular'], 'post type singular name', $custom_post['text_domain'] ),
				'menu_name'          => _x( $custom_post['plural'], 'admin menu', $custom_post['text_domain'] ),
				'name_admin_bar'     => _x( $custom_post['singular'], 'add new on admin bar', $custom_post['text_domain'] ),
				'add_new'            => _x( 'Add New ' . $custom_post['singular'], $custom_post['text_domain'] ),
				'add_new_item'       => __( 'Add New ' . $custom_post['singular'], $custom_post['text_domain'] ),
				'new_item'           => __( 'New ' . $custom_post['singular'], $custom_post['text_domain'] ),
				'edit_item'          => __( 'Edit ' . $custom_post['singular'], $custom_post['text_domain'] ),
				'view_item'          => __( 'View ' . $custom_post['singular'], $custom_post['text_domain'] ),
				'view_items'         => __( 'View ' . $custom_post['plural'], $custom_post['text_domain'] ),
				'all_items'          => __( 'All ' . $custom_post['plural'], $custom_post['text_domain'] ),
				'search_items'       => __( 'Search' . $custom_post['plural'], $custom_post['text_domain'] ),
				'parent_item_colon'  => __( 'Parent ' . $custom_post['plural'], $custom_post['text_domain'] ),
				'not_found'          => __( 'No ' . $custom_post['plural'] . ' found.', $custom_post['text_domain'] ),
				'not_found_in_trash' => __( 'No ' . $custom_post['plural'] . ' found in Trash.', $custom_post['text_domain'] ),
			];
			$args = [
				'labels'             => $labels,
				'description'        => __( $custom_post['description'], $custom_post['text_domain'] ),
				'public'             => $custom_post['public'],
				'publicly_queryable' => $custom_post['publicly_queryable'],
				'show_ui'            => $custom_post['show_ui'],
				'show_in_menu'       => $custom_post['show_in_menu'],
				'menu_icon'          => $custom_post['menu_icon'],
				'query_var'          => $custom_post['query_var'],
				'rewrite'            => [ 'slug' => $custom_post['slug'] ],
				'capability_type'    => $custom_post['capability_type'],
				'has_archive'        => $custom_post['has_archive'],
				'hierarchical'       => $custom_post['hierarchical'],
				'menu_position'      => $custom_post['menu_position'],
				'supports'           => $custom_post['supports'],
				'show_in_rest'       => $custom_post['show_in_rest'],
			];

			register_post_type( $custom_post['slug'], $args );
		}
	}

  /**
    * Flush Rewrite on CPT activation
    * @return empty
    */
    public function rewrite_flush() {
        // Flush the rewrite rules only on theme activation
        flush_rewrite_rules();
    }

	/**
     * WordPress filter hook, used for setting up template.
     *
     * @param array  $args   The arguments.
     * @param string $post_type  The post type.
     * @return array
     */
    public function register_post_type_args( $args, $post_type ) {
		if ( 'youtube-post' === $post_type ) {
			$args['template'] = [
				[ 'gutenberg-good-guitarist/ypt', [] ]
			];
		}

		if ( 'cta' === $post_type ) {
			$args['template'] = [
				[ 'gutenberg-good-guitarist/cta-template', [] ]
			];
		}

		return $args;
	}

	/**
	 * Get details for cta post type by ID.
	 *
	 * @param	array	$course_id	The ID of the course details to fetch.
	 * @return	array
	 */
	public static function get_cta_details( int $course_id ) {
		$course_details = [];
		$course = get_post( $course_id );
		if ($course) {
			$course_details['courseTitle'] = $course->post_title;
			$post_attributes = static::get_block_attributes_from_post_content(
								$course->post_content,
								'gutenberg-good-guitarist/course-template' );
			$course_details = array_merge( $course_details, $post_attributes );
		}
		return $course_details;
	}

	/**
	 * Accepts post content and the block attributes to get(by block slug).
	 * Return an array of the block attributes.
	 *
	 * @param	string	$post_content	Post content string.
	 * @param	string	$block_slug		String of block slug to get attributes for.
	 * @return	array
	 */
	public static function get_block_attributes_from_post_content( string $post_content, string $block_slug ): array {
		$block_attributes = [];
		$parsed_blocks = parse_blocks( $post_content );
		$ypt_block = array_filter( $parsed_blocks, function( $block ) use ( $block_slug ) {
			return $block['blockName'] === $block_slug;
		} );
		if ( ! empty( $ypt_block ) ) {
			$block_attributes = $ypt_block[0]['attrs'];
		}
		return $block_attributes;
	}

	/**
	 * Get all taxonomies related to Youtube Posts, with their terms.
	 *
	 * @return	array
	 */
	public static function get_youtube_post_taxonomies_and_terms(): array {
		$ypt_taxonomies_and_terms = [];
		$ypt_taxonomies = get_object_taxonomies( 'youtube-post' );

		if ( $ypt_taxonomies ) {
			foreach ( $ypt_taxonomies as $taxonomy ) {
				$term_list = get_terms([
					'taxonomy' => $taxonomy,
					'hide_empty' => false
				]);
				if ( $term_list ) {
					$term_list = array_map( function( $term_object ) {
						$term_array = (array) $term_object;
						$term_array = array_filter( $term_array, function( $key ) {
							return $key === 'slug' || $key === 'name';
						}, ARRAY_FILTER_USE_KEY );
						return $term_array;
					}, $term_list );

					$ypt_taxonomies_and_terms[$taxonomy] = $term_list;
				}
			}
		}
		return $ypt_taxonomies_and_terms;
	}

	/**
	 * Get terms(with term urls) and meta values for a given Youtube Post.
	 *
	 * @param	int	$post_id	The ID of the post to retrieve values for.
	 * @return	array
	 */
	public static function get_single_youtube_post_terms_and_meta( int $post_id ): array {
		$post_terms = [];
		$taxonomies = get_post_taxonomies( $post_id );
		foreach ( $taxonomies as $key => $tax ) {
			$term_list = get_the_terms( $post_id, $tax );
			if ( $term_list ) {
				$term_list = array_map( function( $term_object ) {
					$term_array = (array) $term_object;
					$term_array['url'] = get_term_link( $term_array['term_id'] );
					$term_array = array_filter( $term_array, function( $key ) {
						return $key === 'slug' || $key === 'name' || $key === 'url';
					}, ARRAY_FILTER_USE_KEY );
					return $term_array;
				}, $term_list );

				$post_terms[$tax] = $term_list;
			}
		}
		return $post_terms;
	}

	/**
	 * Add the term pills markup to the beginning of the youtube post content
	 * and append related posts markup on the end of it.
	 *
	 * @param	string	$content	The post content.
	 * @return	string
	 */
	public function youtube_post_content( string $content ): string {
		if ( 'youtube-post' === get_post_type() ) {
			$song_and_artist = $this->get_song_and_artist();
			$term_pills_markup = $this->get_term_pills_markup();
			$related_posts_markup = $this->get_related_posts_markup();

			return sprintf( '%s%s%s%s', $song_and_artist, $term_pills_markup, $content, $related_posts_markup );
		} else {
			return $content;
		}
	}

	/**
	 * Get the song and artist for the youtube post.
	 * 
	 * @return	string
	 */
	public function get_song_and_artist(): string {
		$taxonomies = self::get_single_youtube_post_terms_and_meta( get_the_ID() );
		$artist = $taxonomies['artist'][0];
		$ypt_post = get_post( get_the_ID() );
		$atts = self::get_block_attributes_from_post_content( $ypt_post->post_content, 'gutenberg-good-guitarist/ypt' );
		ob_start();
		include get_template_directory() . '/views/partials/song-and-artist.php';
		return ob_get_clean();
	}

	/**
	 * Get the term pills markup.
	 *
	 * @return	string
	 */
	public function get_term_pills_markup(): string {
		$taxonomies = self::get_single_youtube_post_terms_and_meta( get_the_ID() );
		ob_start();
		include get_template_directory() . '/views/partials/ypt-pills.php';
		return ob_get_clean();
	}

	/**
	 * Get related posts markup.
	 *
	 * @return	string
	 */
	public function get_related_posts_markup(): string {
		$related_posts = self::get_related_posts( get_the_ID(), 'genre', 5 );
		foreach( $related_posts as $post ) {
			$post->atts = self::get_block_attributes_from_post_content( $post->post_content, 'gutenberg-good-guitarist/ypt' );
		}
		ob_start();
		include get_template_directory() . '/views/partials/related-posts.php';
		return ob_get_clean();
	}

	/**
	 * Get "related" posts. Performs an inclusive search based on $post_id's
	 * taxonomy and returns three matches. The taxonomy slug is used in a query for
	 * posts with terms under that taxonomy. Only searches posts of the same type as
	 * the post ID.
	 *
	 * @param	int		 $post_id		The ID to get related posts for.
	 * @param	string	 $taxonomy_slug	The taxonomy to match terms by.
	 * @param	int|null $num_posts		The amount of posts to return.
	 * @return	array
	 */
	public static function get_related_posts( int $post_id, string $taxonomy_slug, $num_posts = null ): array {
		$related_posts = [];
		$genres = get_the_terms( $post_id, $taxonomy_slug );

		if ( $genres ) {
			$genres = array_map( function( $term_object ) {
				$term_array = (array) $term_object;
				return $term_array['slug'];
			}, $genres );

			$search_args = [
				'post_type' => get_post_type( $post_id ) ?? 'post',
				'posts_per_page' => is_null( $num_posts ) ? -1 : $num_posts,
			];

			$tax_args = [
				'tax_query' => [
					'relation' => 'OR',
					[
						'taxonomy' => $taxonomy_slug,
						'field'    => 'slug',
						'terms'    => $genres,
					]
				]
			];

			$tax_query = new \WP_Query( array_merge( $search_args, $tax_args ) );

			if ( $tax_query->have_posts() ) {
				$related_posts = static::filterPostFromPostList( $post_id, $tax_query->posts);
			} else {
				$all_posts_query = new \WP_Query( $search_args );
				if ( $all_posts_query->have_posts() ) {
					$related_posts = static::filterPostFromPostList( $post_id, $all_posts_query->posts);
				}
			}
		}

		return $related_posts;
	}

	/**
	 * Makes sure a list of WP_Posts doesn't contain a post with ID
	 * of $post_to_filter.
	 *
	 * @param	int		$post_to_filter		Filter array by excluding post of this ID.
	 * @param	array	$related_posts		Array to filter.
	 * @return	array
	 */
	public static function filterPostFromPostList( int $post_to_filter, array $post_list ): array {
		return array_filter( $post_list, function( $post ) use ( $post_to_filter ) {
			return $post->ID !== $post_to_filter;
		} );
	}
}


