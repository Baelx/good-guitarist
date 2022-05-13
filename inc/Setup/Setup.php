<?php

namespace GoodGuitarist\Setup;

class Setup
{
    /**
     * register default hooks and actions for WordPress
     * @return
     */
    public function register() {
        add_action( 'after_setup_theme', [ $this, 'setup' ] );
        add_action( 'after_setup_theme', [ $this, 'content_width' ], 0);
		add_filter( 'wp_headers', [ $this, 'wp_headers' ], 10 );
    }

    public function setup() {
        /*
         * You can activate this if you're planning to build a multilingual theme
         */
        // load_theme_textdomain( 'good-guitarist', get_template_directory() . '/languages' );

        /*
         * Default Theme Support options better have
         */
        add_theme_support( 'automatic-feed-links' );
        add_theme_support( 'title-tag' );
        add_theme_support( 'post-thumbnails' );
        add_theme_support( 'customize-selective-refresh-widgets' );

        /**
        * Add woocommerce support and woocommerce override
        */
        // add_theme_support( 'woocommerce' );

        add_theme_support( 'html5', array(
            'search-form',
            'comment-form',
            'comment-list',
            'gallery',
            'caption',
        ) );

        add_theme_support( 'custom-background', apply_filters( 'awps_custom_background_args', array(
            'default-color' => 'ffffff',
            'default-image' => '',
        ) ) );

        /*
         * Activate Post formats if you need
         */
        add_theme_support( 'post-formats', array(
            'aside',
            'gallery',
            'link',
            'image',
            'quote',
            'status',
            'video',
            'audio',
            'chat',
        ) );
    }

    /*
        Define a max content width to allow WordPress to properly resize your images
    */
    public function content_width() {
        $GLOBALS[ 'content_width' ] = apply_filters( 'content_width', 1440 );
    }

	/**
	 * Security headers settings in wordpress.
	 * For example, allows for certain sources within iframes.
	 *
	 * @param	array	$headers	Existing security headers passed from the wp_headers hook.
	 * @return	array
	 */
	public function wp_headers( array $headers ): array {
        $csp         = '';
        $csp_initial = [
            'upgrade-insecure-requests',
            'frame-ancestors' => "'self'",
            'default-src'     => "'self' *.twitter.com *.twimg.com",
            'font-src'        => "'self' 'unsafe-inline' data:",
            'media-src'       => "'self' 'unsafe-inline'",
            'style-src'       => "'self' 'unsafe-inline' *.twitter.com *.twimg.com",
            'connect-src'     => "'self'",
            'frame-src'       => "'self' *.twitter.com youtube.com *.youtube.com youtu.be",
            'script-src'      => "'self' 'unsafe-inline' 'unsafe-eval' *.twimg.com *.twitter.com",
            'img-src'         => "*",
        ];
        foreach ( $csp_initial as $directive => $rule ) {
            $csp .= sprintf(
                ' %s %s; ',
                is_string( $directive ) ? $directive : '',
                $rule
            );
        }
        $headers['Content-Security-Policy']   = trim( $csp );
        $headers['Strict-Transport-Security'] = 'max-age=10886400; preload';
        return $headers;
	}
}
