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
	}

  /**
    * Create Custom Post Types
    * @return The registered post type object, or an error object
    */
    public function custom_post_type()
    {
		/**
		 * Add the post types and their details
		 */
		$custom_posts = [
			[
				'slug' => 'course',
				'singular' => 'Course or Ebook',
				'plural' => 'Courses & Ebooks',
				'menu_icon' => 'dashicons-admin-customizer',
				'menu_position' => 18,
				'text_domain' => 'good-guitarist',
				'supports' => [ 'title', 'editor', 'thumbnail' , 'excerpt', 'author', 'custom-fields'],
				'description' => 'Course & Ebook Custom Post Type',
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
    public function rewrite_flush()
    {
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

		if ( 'course' === $post_type ) {
			$args['template'] = [
				[ 'gutenberg-good-guitarist/course-template', [] ]
			];
		}

		return $args;
	}

	/**
	 * Get details for course post type by ID.
	 *
	 * @param	array	$course_id	The ID of the course details to fetch.
	 * @return	array
	 */
	public static function get_course_details( $course_id ) {
		$course_details = [];
		$course = get_post( $course_id );
		if ($course) {
			$course_details['courseTitle'] = $course->post_title;
			$parsed_blocks = parse_blocks( $course->post_content );
			/**
			 * The course post may use multiple blocks but only find the
			 * (hopefully) single instance of the course template block
			 * in order to get its attributes.
			 */
			$course_template_block = array_filter( $parsed_blocks, function( $block ) {
				return 'gutenberg-good-guitarist/course-template' === $block['blockName'];
			} );
			$course_details = array_merge( $course_details, $course_template_block[0]['attrs'] );
		}
		return $course_details;
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
}


