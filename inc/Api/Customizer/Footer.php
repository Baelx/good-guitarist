<?php
/**
 * Theme Customizer - Footer
 *
 * @package good-guitarist
 */

namespace GoodGuitarist\Api\Customizer;

use WP_Customize_Control;
use WP_Customize_Color_Control;

use GoodGuitarist\Api\Customizer;

/**
 * Customizer class
 */
class Footer {
	/**
	 * register default hooks and actions for WordPress
	 * @return void
	 */
	public function register( $wp_customize ): void {
		$wp_customize->add_section( 'gg_footer_section' , array(
			'title' => __( 'Footer', 'good-guitarist' ),
			'description' => __( 'Customize the Footer' ),
			'priority' => 162
		) );

		$wp_customize->add_setting( 'gg_footer_background_color' , array(
			'default' => '#0872bb',
			'transport' => 'postMessage',
		) );

		$wp_customize->add_setting( 'gg_footer_font_color' , array(
			'default' => '#fff',
			'transport' => 'postMessage',
		) );

		$wp_customize->add_setting( 'gg_footer_header_text' , array(
            'default' => '',
            'transport' => 'postMessage',
        ) );

		$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'gg_footer_background_color', array(
			'label' => __( 'Background Color', 'good-guitarist' ),
			'section' => 'gg_footer_section',
			'settings' => 'gg_footer_background_color',
		) ) );

		$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'gg_footer_font_color', array(
			'label' => __( 'Text and Icon Color', 'good-guitarist' ),
			'section' => 'gg_footer_section',
			'settings' => 'gg_footer_font_color',
		) ) );

		$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'gg_footer_header_text', [
			'label' => __( 'The large text in the footer' ),
			'section' => 'gg_footer_section',
			'settings' => 'gg_footer_header_text'
		] ) );

		if ( isset( $wp_customize->selective_refresh ) ) {
			$wp_customize->selective_refresh->add_partial( 'gg_footer_background_color', array(
				'selector' => '#awps-footer-control',
				'render_callback' => array( $this, 'outputCss' ),
				'fallback_refresh' => true
			) );

			$wp_customize->selective_refresh->add_partial( 'awps_footer_copy_text', array(
				'selector' => '#awps-footer-copy-control',
				'render_callback' => array( $this, 'outputText' ),
				'fallback_refresh' => true
			) );
		}
	}

	/**
	 * Generate inline CSS for customizer async reload
	 */
	public function outputCss()
	{
		echo '<style type="text/css">';
			echo Customizer::css( '.site-footer', 'background-color', 'gg_footer_background_color' );
		echo '</style>';
	}

	/**
	 * Generate inline text for customizer async reload
	 */
	public function outputText()
	{
		echo Customizer::text( 'awps_footer_copy_text' );
	}
}
