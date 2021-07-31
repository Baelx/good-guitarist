<?php

namespace GoodGuitarist\Custom;

/**
 * Extras.
 */
class Extras
{
	/**
     * register default hooks and actions for WordPress
     * @return
     */
	public function register() {
		add_filter( 'body_class', array( $this, 'body_class' ) );
		add_filter( 'wp_headers', array( $this, 'additional_headers' ) );
	}

	public function body_class( $classes )
	{

		// Adds a class of group-blog to blogs with more than 1 published author.
		if ( is_multi_author() ) {
			$classes[] = 'group-blog';
		}
		// Adds a class of hfeed to non-singular pages.
		if ( ! is_singular() ) {
			$classes[] = 'hfeed';
		}

		return $classes;
	}

	/**
	 * Will this work in the backend? I think it needs to be a different hook.
	 *
	 */
	public function additional_headers( $headers ) {
		$headers['X-Frame-Options'] = 'ALLOW-FROM https://youtube.com';
		return $headers;
	}
}
