<?php

namespace GoodGuitarist\Custom;

use GoodGuitarist\Api\Settings;

/**
 * Admin
 * use it to write your admin related methods by tapping the settings api class.
 */
class Admin {
	/**
	 * Store a new instance of the Settings API Class
	 * @var class instance
	 */
	public $settings;

	/**
	 * Constructor
	 */
	public function __construct() {
		$this->settings = new Settings();
	}

	/**
	 * Trigger the register method of the Settings API Class
	 * @return
	 */
	private function register_settings() {
		$this->settings->register();
	}

	/**
	 * Enqueue scripts in specific admin pages
	 * @return $this
	 */
	private function enqueue() {
		// Scripts multidimensional array with styles and scripts
		$scripts = array(
			'script' => array(
				'jquery',
				'media_uploader',
				get_template_directory_uri() . '/assets/dist/js/admin.js'
			),
			'style' => array(
				get_template_directory_uri() . '/assets/dist/css/admin.css',
				'wp-color-picker'
			)
		);

		// Pages array to where enqueue scripts
		$pages = array( 'toplevel_page_awps' );

		// Enqueue files in Admin area
		$this->settings->admin_enqueue( $scripts, $pages );

		return $this;
	}
}
