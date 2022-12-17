<?php
/**
 * Theme Customizer - Header
 *
 * @package good-guitarist
 */

namespace GoodGuitarist\Api\Customizer;

use WP_Customize_Color_Control;
use WP_Customize_Media_Control;
use GoodGuitarist\Api\Customizer;

/**
 * Customizer class
 */
class Header
{
	/**
	 * register default hooks and actions for WordPress
	 * @return
	 */
	public function register( $wp_customize )
	{
		$wp_customize->add_setting( 'mobile-logo' , array(
			'title'      => __( 'Mobile Logo' ),
			'priority'   => 30,
		) );

		$wp_customize->add_control( new \WP_Customize_Image_Control( $wp_customize, 'mobile-logo', array(
				   'label'      => __( 'Upload a logo' ),
				   'section'    => 'mobile-logo',
				   'settings'   => 'mobile-logo-id' 
				)
			)
		);

		$wp_customize->get_setting( 'blogname' )->transport = 'postMessage';
		$wp_customize->get_setting( 'blogdescription' )->transport = 'postMessage';

		if ( isset( $wp_customize->selective_refresh ) ) {
			$wp_customize->selective_refresh->add_partial( 'blogname', array(
				'selector' => '.site-title a',
				'render_callback' => function() {
					bloginfo( 'name' );
				},
			) );
			$wp_customize->selective_refresh->add_partial( 'blogdescription', array(
				'selector' => '.site-description',
				'render_callback' => function() {
					bloginfo( 'description' );
				},
			) );
		}
	}

	/**
	 * Generate inline CSS for customizer async reload
	 */
	public function outputCss()
	{
		echo '<style type="text/css">';
			echo Customizer::css( '.site-header', 'background-color', 'awps_header_background_color' );
			echo Customizer::css( '.site-header', 'color', 'awps_header_text_color' );
			echo Customizer::css( '.site-header a', 'color', 'awps_header_link_color' );
		echo '</style>';
	}
}
