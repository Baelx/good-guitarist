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
		add_action( 'wp_ajax_ypt_ajax_filter_search', [ $this, 'ypt_ajax_filter_search' ] );
		add_action( 'wp_ajax_nopriv_ypt_ajax_filter_search', [ $this, 'ypt_ajax_filter_search' ] );
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
		$custom_posts = array(
			array(
				'slug' => 'artist',
				'singular' => 'Artist',
				'plural' => 'Artists',
				'menu_icon' => 'dashicons-admin-customizer',
				'menu_position' => 18,
				'text_domain' => 'good-guitarist',
				'supports' => array( 'title', /*'editor', 'thumbnail' , 'excerpt', 'author', 'comments'*/ ),
				'description' => 'Artists Custom Post Type',
				'public' => true,
				'publicly_queryable' => true,
				'show_ui' => true,
				'show_in_menu' => true,
				'query_var' => true,
				'capability_type' => 'post',
				'has_archive' => true,
				'hierarchical' => false,
				'show_in_rest' => true,
			),
			array(
				'slug' => 'youtube-post',
				'singular' => 'Youtube Post',
				'plural'  => 'Youtube Posts',
				'menu_icon' => 'dashicons-video-alt3',
				'menu_position' => 18,
				'text_domain' => 'awps',
				'supports' => array( 'title', 'editor', 'thumbnail' , 'excerpt', 'author', /*'comments'*/ ),
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
			),
		);

		foreach ( $custom_posts as $custom_post ) {
			$labels = array(
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
			);
			$args = array(
				'labels'             => $labels,
				'description'        => __( $custom_post['description'], $custom_post['text_domain'] ),
				'public'             => $custom_post['public'],
				'publicly_queryable' => $custom_post['publicly_queryable'],
				'show_ui'            => $custom_post['show_ui'],
				'show_in_menu'       => $custom_post['show_in_menu'],
				'menu_icon'          => $custom_post['menu_icon'],
				'query_var'          => $custom_post['query_var'],
				'rewrite'            => array( 'slug' => $custom_post['slug'] ),
				'capability_type'    => $custom_post['capability_type'],
				'has_archive'        => $custom_post['has_archive'],
				'hierarchical'       => $custom_post['hierarchical'],
				'menu_position'      => $custom_post['menu_position'],
				'supports'           => $custom_post['supports'],
				'show_in_rest'       => $custom_post['show_in_rest'],
			);

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
	 * Ajax search enqueue for YPT post types.
	 *
	 * @return void
	 */
	public static function ypt_ajax_filter_search_scripts(): void {
		wp_enqueue_script( 'ypt_ajax_filter_search', mix('js/yptAjax.js'), ['jquery'], '1.0.0', true );
		wp_add_inline_script( 'ypt_ajax_filter_search', 'const YPTSEARCHAJAX = ' . json_encode( [
			'ajax_url' => admin_url( 'admin-ajax.php' ),
		 ] ), 'before' );
	}

	/**
	 * Recursively sanitize text fields within arrays sent from the client.
	 *
	 * @param	array	$array	The array to sanitize.
	 * @return	array
	 */
	public function sanitize_array( array $array ): array {
		foreach ( $array as $key => &$value ) {
			if ( is_array( $value ) ) {
				$value = sanitize_array( $value );
			} else {
				$value = sanitize_text_field( $value );
			}
		}
		return $array;
	}

	/**
	 * Handle an ajax request.
	 *
	 * @return void
	 */
	public function ypt_ajax_filter_search(): void {
		// Set the content type.
		header("Content-Type: application/json");

		$meta_query = [ 'relation' => 'AND' ];
		$tax_query = [ 'relation' => 'AND' ];

		if 	( isset( $_GET['songDecade'] ) ) {
			$song_decade = $this->sanitize_array( $_GET['songDecade'] );
			$tax_query[] = [
				'taxonomy' => 'decade',
				'field' => 'slug',
				'terms' => $song_decade
			];
		}

		$args = array(
			'post_type' => 'youtube-post',
			'posts_per_page' => -1,
			// 'tax_query' => $tax_query,
			// 'meta_query' => $meta_query,
		);

		error_log(print_r($_GET['songSearchText'], true));

		// If the user didn't type a search, return "all" results.
		if ( isset( $_GET['songSearchText'] ) ) {
			$search = sanitize_text_field( $_GET['songSearchText'] );
			$search_query_args = [
				'post_type' => 'youtube-post',
				'posts_per_page' => -1,
				's' => $search,
				'tax_query' => $tax_query,
				// 'meta_query' => $meta_query,
			];
			$search_query = new \WP_Query( $search_query_args );
		} else {
			$search_query = new \WP_Query( $args );
		}

		if ( $search_query->have_posts() ) {

			$result = [];

			while ( $search_query->have_posts() ) {
				$search_query->the_post();

				$cats = strip_tags( get_the_category_list(", ") );
				$result[] = [
					"id" => get_the_ID(),
					"title" => get_the_title(),
					"content" => parse_blocks(get_the_content()),
					"permalink" => get_permalink(),
					// "year" => get_field('year'),
					// "rating" => get_field('rating'),
					// "director" => get_field('director'),
					// "language" => get_field('language'),
					// "genre" => $cats,
					// "poster" => wp_get_attachment_url(get_post_thumbnail_id($post->ID),'full')
				];
			}
			wp_reset_query();

			wp_send_json($result);

		} else {
			// no posts found
			wp_send_json('no worky');
		}
	}
}


