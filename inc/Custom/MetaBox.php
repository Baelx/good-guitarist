<?php

namespace GoodGuitarist\Custom;

class MetaBox {

    /**
     * Register default hooks and actions for WordPress
	 *
     * @return	void
     */
    public function register(): void {
		  add_action( 'init', [ $this, 'register_meta_fields' ] );
    }

	/**
	 * Register all meta fields.
	 *
	 * @return	void
	 */
	public function register_meta_fields(): void {
		register_post_meta(
			'youtube-post',
			'song_difficulty',
			[
				'show_in_rest' => true,
				'single'       => true,
				'type'         => 'string'
			]
		);
		register_post_meta(
			'youtube-post',
			'contains_one_barre',
			[
				'show_in_rest' => true,
				'single'       => true,
				'type'         => 'boolean',
				'default'	   => false
			]
		);
		register_post_meta(
			'course',
			'cta_url',
			[
				'show_in_rest' => true,
				'single'       => true,
				'type'         => 'string'
			]
		);
	}

}
