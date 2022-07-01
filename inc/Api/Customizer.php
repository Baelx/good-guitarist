<?php
/**
 * Theme Customizer
 *
 * @package good-guitarist
 */

namespace GoodGuitarist\Api;

use GoodGuitarist\Api\Customizer\Header;
use GoodGuitarist\Api\Customizer\Social;
use GoodGuitarist\Api\Customizer\Footer;

/**
 * Customizer class
 */
class Customizer
{
	/**
	 * register default hooks and actions for WordPress
	 * @return
	 */
	public function register()
	{
		add_action( 'wp_head', [ $this , 'output' ] );
		add_action( 'customize_register', [ $this, 'setup' ] );
		add_action( 'after_setup_theme', [ $this, 'gg_custom_logo_setup' ] );
	}

	/**
	 * Store all the classes inside an array
	 * @return array Full list of classes
	 */
	public function get_classes()
	{
		return [
			Header::class,
			Social::class,
			Footer::class,
		];
	}

	/**
	 * Add postMessage support for site title and description for the Theme Customizer.
	 *
	 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
	 */
	public function setup( $wp_customize ) {
		foreach ( $this->get_classes() as $class ) {
			$service = new $class;
			if ( method_exists( $class, 'register') ) {
				$service->register( $wp_customize );
			}
		}
	}

	/**
	 * Generate inline CSS for customizer options
	 * here you should list all your custom options with the relative class and CSS attribute it affects
	 */
	public function output()
	{
		echo '<!--Customizer CSS--> <style type="text/css">';
			echo self::css( '#sidebar', 'background-color', 'awps_sidebar_background_color' );
			echo self::css( '.site-footer', 'background-color', 'awps_footer_background_color' );
			echo self::css( '.site-header', 'background-color', 'awps_header_background_color' );
			echo self::css( '.site-header', 'color', 'awps_header_text_color' );
			echo self::css( '.site-header a', 'color', 'awps_header_link_color' );
		echo '</style><!--/Customizer CSS-->';
	}

	/**
	 * This will generate a line of CSS for use in selective refresh. If the setting
	 * ($mod_name) has no defined value, the CSS will not be output.
	 *
	 * @uses get_theme_mod()
	 * @param string $selector CSS selector
	 * @param string $property The name of the CSS *property* to modify
	 * @param string $mod_name The name of the 'theme_mod' option to fetch
	 * @param bool $echo Optional. Whether to print directly to the page (default: true).
	 * @return string Returns a single line of CSS with selectors and a property.
	 */
	public static function css( $selector, $property, $theme_mod )
	{
		$theme_mod = get_theme_mod($theme_mod);

		if ( ! empty( $theme_mod ) ) {
			return sprintf('%s { %s:%s; }', $selector, $property, $theme_mod );
		}
	}

	/**
	 * This will generate text for use in selective refresh. If the setting
	 * ($mod_name) has no defined value, the text will not be output.
	 *
	 * @uses get_theme_mod()
	 * @param string $mod_name The name of the 'theme_mod' option to fetch
	 * @param bool $echo Optional. Whether to print directly to the page (default: true).
	 * @return string Returns a single line of text.
	 */
	public static function text( $theme_mod )
	{
		$theme_mod = get_theme_mod($theme_mod);

		if ( ! empty( $theme_mod ) ) {
			return $theme_mod;
		}
	}

	/**
	 * Enable site logo support.
	 * 
	 * @return	void
	 */
	public function gg_custom_logo_setup() {
		$defaults = array(
			'height'               => 100,
			'width'                => 400,
			'flex-height'          => true,
			'flex-width'           => true,
			'header-text'          => [ 'good-guitarist', '' ],
			'unlink-homepage-logo' => true, 
		);
	 
		add_theme_support( 'custom-logo', $defaults );
	}
}
