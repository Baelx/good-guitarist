<?php
/**
 * Theme Customizer - Social
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
class Social {
    /**
     * register default hooks and actions for WordPress
     * @return void
     */
    public function register( $wp_customize ): void {
        $wp_customize->add_section( 'gg_social_section' , array(
            'title' => __( 'Social', 'good-guitarist' ),
            'description' => __( 'Manage social networks' ),
            'priority' => 162
        ) );

        $wp_customize->add_setting( 'gg_youtube_url' , array(
            'default' => '',
            'transport' => 'postMessage',
        ) );

        $wp_customize->add_setting( 'gg_facebook_url' , array(
            'default' => '',
            'transport' => 'postMessage',
        ) );

        $wp_customize->add_setting( 'gg_instagram_url' , array(
            'default' => '',
            'transport' => 'postMessage',
        ) );

        $wp_customize->add_setting( 'gg_patreon_url' , array(
            'default' => '',
            'transport' => 'postMessage',
        ) );

        $wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'gg_youtube_url', array(
            'label' => __( 'Youtube URL', 'good-guitarist' ),
            'section' => 'gg_social_section',
            'settings' => 'gg_youtube_url',
        ) ) );

		$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'gg_facebook_url', array(
            'label' => __( 'Facebook URL', 'good-guitarist' ),
            'section' => 'gg_social_section',
            'settings' => 'gg_facebook_url',
        ) ) );

		$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'gg_instagram_url', array(
            'label' => __( 'Instagram URL', 'good-guitarist' ),
            'section' => 'gg_social_section',
            'settings' => 'gg_instagram_url',
        ) ) );

		$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'gg_patreon_url', array(
            'label' => __( 'Patreon URL', 'good-guitarist' ),
            'section' => 'gg_social_section',
            'settings' => 'gg_patreon_url',
        ) ) );

        if ( isset( $wp_customize->selective_refresh ) ) {
            $wp_customize->selective_refresh->add_partial( 'awps_footer_background_color', array(
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
            echo Customizer::css( '.site-footer', 'background-color', 'awps_footer_background_color' );
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
