<?php
/**
 * Build Gutenberg Blocks
 *
 * @package good-guitarist
 */

namespace GoodGuitarist\Api;

use GoodGuitarist\Custom\PostTypes;
use GoodGuitarist\Custom\DataEncryption;

/**
 * Customizer class
 */
class Gutenberg {
	/**
	 * Data encryption class.
	 * @var private
	 */
	private $data_encryption;

	/**
	 * Register default hooks and actions for WordPress
	 *
	 * @return void
	 */
	public function register() {
		$this->data_encryption = new DataEncryption();

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
	public function gutenberg_init() {
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
		wp_enqueue_script( 'gutenberg-good-guitarist-youtube-js', 'https://apis.google.com/js/api.js', [] );
		wp_register_script(
			'gutenberg-good-guitarist',
			get_template_directory_uri() . '/assets/dist/js/gutenberg.js',
			[ 'wp-blocks', 'wp-element', 'wp-editor', 'wp-edit-post', 'gutenberg-good-guitarist-youtube-js' ]
		);

		/**
		 * Expose static images to Gutenberg blocks since you can't load
		 * images how you normally would by bundling them with React.
		 *
		 * Also expose Youtube API key to Gutenberg to be able to fetch YT data.
		 */
		wp_localize_script( 'gutenberg-good-guitarist', 'gutenbergVars', [
			'image_dir' => get_template_directory_uri() . '/assets/dist/images',
			'youtube_api_key' => $this->data_encryption->decrypt( get_option( 'gg_youtube_api_key' ) )
		]);

		register_block_type( 'gutenberg-good-guitarist/small-cta', [
			'editor_script' => 'gutenberg-good-guitarist',
		]);

		register_block_type( 'gutenberg-good-guitarist/large-cta', [
			'editor_script' => 'gutenberg-good-guitarist',
			'render_callback' => [ $this, 'large_cta_render' ]
		]);

		register_block_type( 'gutenberg-good-guitarist/latest-lessons', [
			'editor_script' => 'gutenberg-good-guitarist',
			'render_callback' => [ $this, 'latest_lessons_render' ]
		]);

		register_block_type( 'gutenberg-good-guitarist/ypt', [
			'editor_script' => 'gutenberg-good-guitarist',
		]);

		register_block_type( 'gutenberg-good-guitarist/cta-template', [
			'editor_script' => 'gutenberg-good-guitarist'
		]);

		register_block_type( 'gutenberg-good-guitarist/ypt-search', [
			'editor_script' => 'gutenberg-good-guitarist',
			'render_callback' => [ $this, 'youtube_search_block_render' ]
		]);
	}

	/**
	 * Enqueue scripts and styles of your Gutenberg blocks in the editor
	 * @return
	 */
	public function gutenberg_assets() {
		wp_enqueue_style( 'gutenberg-good-guitarist', get_template_directory_uri() . '/assets/dist/css/gutenberg.css', null );
	}

	/**
	 * Youtube post dynamic block render callback.
	 *
	 * @param	array	$atts	Block attributes.
	 * @return	string
	 */
	public function youtube_post_block_render( $atts ) {
		ob_start();
		include get_template_directory() . '/views/blocks/ypt-post.php';
		return ob_get_clean();
	}

	/**
	 * Prepare data for view then return HTML string for search block.
	 *
	 * @param	array	$att	Block attributes.
	 * @return	string
	 */
	public function youtube_search_block_render( $att ) {
		$ypt_terms = PostTypes::get_youtube_post_taxonomies_and_terms();
		$ypt_meta = [ 'difficulty' => 'sus'];

		ob_start();
		include get_template_directory() . '/views/blocks/ypt-search.php';
		return ob_get_clean();
	}

	/**
	 * Render the large call to action block.
	 *
	 * @param	array	$atts   	Block attributes.
	 * @param	string	$content	Block content
	 */
	public function large_cta_render( $atts, $content ) {
		ob_start();
		include get_template_directory() . '/views/blocks/large-cta.php';
		return ob_get_clean();
	}

	/**
	 * Render the latest posts block.
	 *
	 * @param	array	$atts
	 */
	public function latest_lessons_render( $atts ) {
		ob_start();
		include get_template_directory() . '/views/blocks/latest-lessons.php';
		return ob_get_clean();
	}
}
