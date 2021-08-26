<?php
/**
 * Build Gutenberg Blocks
 *
 * @package good-guitarist
 */

namespace GoodGuitarist\Api;

/**
 * Customizer class
 */
class Gutenberg
{
	/**
	 * Register default hooks and actions for WordPress
	 *
	 * @return WordPress add_action()
	 */
	public function register()
	{
		if ( ! function_exists( 'register_block_type' ) ) {
			return;
		}

		add_action( 'init', array( $this, 'gutenberg_init' ) );

		add_action( 'init', array( $this, 'gutenberg_enqueue' ) );

		add_action( 'enqueue_block_assets', array( $this, 'gutenberg_assets' ) );
	}

	/**
	 * Custom Gutenberg settings
	 * @return
	 */
	public function gutenberg_init()
	{
		add_theme_support( 'gutenberg', array(
			// Theme supports responsive video embeds
			'responsive-embeds' => true,
            // Theme supports wide images, galleries and videos.
            'wide-images' => true,
		) );

		add_theme_support( 'editor-color-palette', array(
			array(
				'name'  => __( 'White', 'good-guitarist' ),
				'slug'  => 'white',
				'color' => '#ffffff',
			),
			array(
				'name'  => __( 'Black', 'good-guitarist' ),
				'slug'  => 'black',
				'color' => '#333333',
			),
			array(
				'name'  => __( 'Gold', 'good-guitarist' ),
				'slug'  => 'gold',
				'color' => '#FCBB6D',
			),
			array(
				'name'  => __( 'Pink', 'good-guitarist' ),
				'slug'  => 'pink',
				'color' => '#FF4444',
			),
			array(
				'name'  => __( 'Grey', 'good-guitarist' ),
				'slug'  => 'grey',
				'color' => '#b8c2cc',
			),
		) );
	}

	/**
	 * Enqueue scripts and styles of your Gutenberg blocks
	 * @return
	 */
	public function gutenberg_enqueue()
	{
		wp_enqueue_script( 'gutenberg-good-guitarist-youtube-js', 'https://apis.google.com/js/api.js', array(), );
		wp_register_script( 'gutenberg-good-guitarist', get_template_directory_uri() . '/assets/dist/js/gutenberg.js', array( 'wp-blocks', 'wp-element', 'wp-editor', 'gutenberg-good-guitarist-youtube-js' ) );

		register_block_type( 'gutenberg-good-guitarist/small-course-card', array(
			'editor_script' => 'gutenberg-good-guitarist', // Load script in the editor.
		) );

		register_block_type( 'gutenberg-good-guitarist/large-course-card', array(
			'editor_script' => 'gutenberg-good-guitarist', // Load script in the editor.
		) );

		register_block_type( 'gutenberg-good-guitarist/latest-lessons', array(
			'editor_script' => 'gutenberg-good-guitarist', // Load script in the editor.
		) );

		register_block_type( 'gutenberg-good-guitarist/ypt', array(
			'editor_script' => 'gutenberg-good-guitarist'
		) );

		register_block_type( 'gutenberg-good-guitarist/ypt-search', array(
			'editor_script' => 'gutenberg-good-guitarist',
			'render_callback' => [ $this, 'youtube_search_block_render' ]
		) );
	}

	/**
	 * Enqueue scripts and styles of your Gutenberg blocks in the editor
	 * @return
	 */
	public function gutenberg_assets() {
		wp_enqueue_style( 'gutenberg-good-guitarist-cta', get_template_directory_uri() . '/assets/dist/css/gutenberg.css', null );
	}

	/**
	 * Prepare data for view then return HTML string for search block.
	 *
	 * @param	array	$att	Block attributes.
	 * @return	string
	 */
	public function youtube_search_block_render( $att ) {
		$ypt_terms = $this->get_youtube_post_taxonomies_and_terms();
		$ypt_meta = [ 'difficulty' => 'sus'];

		ob_start();
		include get_template_directory() . '/views/blocks/ypt-search.php';
		return ob_get_clean();
	}

	/**
	 * Get all taxonomies related to Youtube Posts, with their terms.
	 *
	 * @return	array
	 */
	public function get_youtube_post_taxonomies_and_terms(): array {
		$ypt_taxonomies_and_terms = [];
		$ypt_taxonomies = get_object_taxonomies( 'youtube-post' );

		if ( $ypt_taxonomies ) {
			foreach ( $ypt_taxonomies as $taxonomy ) {
				$term_list = get_terms([
					'taxonomy' => $taxonomy,
					'hide_empty' => false
				]);

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
		return $ypt_taxonomies_and_terms;
	}
}
