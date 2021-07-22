<?php

namespace GoodGuitarist\Custom;


class MetaBox {


	public function __construct() {

	}

    /**
     * Register default hooks and actions for WordPress
	 *
     * @return	void
     */
    public function register(): void {
		  add_action( 'init', array( $this, 'register_all_taxonomies' ) );
    }

	public function register_meta_fields() {
		register_post_meta(
			'youtube-post',
			'genre',
			[
				'show_in_rest' => true,
				'single'       => true,
				'type'         => 'string',
				'auth_callback' => function() {
					return current_user_can( 'edit_posts' );
				}
			]
		);
	}

}
