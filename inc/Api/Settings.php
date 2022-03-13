<?php
/**
 * Settings API
 *
 * @package good-guitarist
 */

namespace GoodGuitarist\Api;

use GoodGuitarist\Custom\DataEncryption;

/**
 * Settings API Class
 */
class Settings {
	/**
	 * Settings array
	 * @var private array
	 */
	public $settings = [];

	/**
	 * Array of settings that need encryption.
	 * @var private array
	 */
	private $secret_settings = [];

	/**
	 * Sections array
	 * @var private array
	 */
	public $sections = [];

	/**
	 * Fields array
	 * @var private array
	 */
	public $fields = [];

	/**
	 * Script path
	 * @var string
	 */
	public $script_path;

	/**
	 * Enqueues array
	 * @var private array
	 */
	public $enqueues = [];

	/**
	 * Admin pages array to enqueue scripts
	 * @var private array
	 */
	public $enqueue_on_pages = [];

	/**
	 * Admin pages array
	 * @var private array
	 */
	public $admin_pages = [];

	/**
	 * Admin subpages array
	 * @var private array
	 */
	public $admin_subpages = [];

	/**
	 * Data encryption class.
	 * @var private
	 */
	private $data_encryption;

	/**
	 * Constructor
	 */
	public function __construct() {
		$this->data_encryption = new DataEncryption();
		$this->secret_settings = [ 'gg_youtube_api_key' ];
		$pages = [
				[
				'page_title' => __( 'Good Guitarist Settings' ),
				'menu_title' => __( 'GG Settings' ),
				'capability' => 'admin',
				'menu_slug' => 'good_guitarist_settings',
				'callback' => [ $this, 'admin_page_render' ],
				'icon_url' => 'dashicons-admin-generic',
				'position' => 99
			]
		];
		$settings = [
			[
				'option_group' => 'good_guitarist_options_group',
				'option_name' => 'gg_youtube_api_key'
			]
		];
		$sections = [
			[
				'id' => 'gg_youtube',
				'title' => __( 'Youtube API settings' ),
				'callback' => [ $this, 'youtube_settings_render' ],
				'page' => 'good_guitarist_settings'
			]
		];
		$fields = [
			[
				'id' => 'gg_youtube_api_key',
				'title' => __( 'Youtube API Key' ),
				'callback' => [ $this, 'youtube_api_input_render' ],
				'page' => 'good_guitarist_settings',
				'section' => 'gg_youtube'
			]
		];

		$this->add_pages( $pages );
		$this->add_settings( $settings )->add_sections( $sections )->add_fields( $fields );
	}

	/**
	 * Register setttings and set up settings hooks.
	 *
	 * @return	void
	 */
	public function register(): void {
		if ( !empty( $this->enqueues ) )
			add_action( 'admin_enqueue_scripts', array( $this, 'admin_scripts' ) );

		if ( !empty( $this->admin_pages ) || !empty( $this->admin_subpages ) )
			add_action( 'admin_menu', array( $this, 'add_admin_menu' ) );

		if ( !empty( $this->settings ) )
			add_action( 'admin_init', array( $this, 'register_custom_settings' ) );

		$this->encrypt_secret_settings();
	}

	/**
	 * Sets up a filter when a secret setting is saved.
	 *
	 * @return	void
	 */
	private function encrypt_secret_settings(): void {
		add_filter( "pre_update_option_gg_youtube_api_key", function( $new_value ) {
			return $this->data_encryption->encrypt( $new_value );
		}, 10, 2 );
	}

	/**
	 * Dynamically enqueue styles and scripts in admin area
	 *
	 * @param  array  $scripts file paths or wp related keywords of embedded files
	 * @param  array  $pages    pages id where to load scripts
	 */
	public function admin_enqueue( $scripts = [], $pages = [] ) {
		if ( empty( $scripts ) )
			return;

		$i = 0;
		foreach ( $scripts as $key => $value ) :
			foreach ( $value as $val ):
				$this->enqueues[ $i ] = $this->enqueue_script( $val, $key );
				$i++;
			endforeach;
		endforeach;

		if ( !empty( $pages ) ) :
			$this->enqueue_on_pages = $pages;
		endif;

		return $this;
	}

	/**
	 * Render the admin page.
	 *
	 * @return	void
	 */
	public function admin_page_render(): void {
		ob_start();
		include \get_template_directory() . '/views/admin/index.php';
		echo ob_get_clean();
	}

	/**
	 * Render the youtube settings section.
	 */
	public function youtube_settings_render(): void {
		ob_start();
		include \get_template_directory() . '/views/admin/youtube-settings.php';
		echo ob_get_clean();
	}

	/**
	 * Render the youtube api input.
	 */
	public function youtube_api_input_render(): void {
		ob_start();
		include \get_template_directory() . '/views/admin/youtube-api.php';
		echo ob_get_clean();
	}

	/**
	 * Call the right WP functions based on the file or string passed
	 *
	 * @param  array $script  file path or wp related keyword of embedded file
	 * @param  var $type      style | script
	 * @return variable functions
	 */
	private function enqueue_script( array $script, $type ) {
		if ( $script === 'media_uploader' )
			return 'wp_enqueue_media';

		return ( $type === 'style' ) ? array( 'wp_enqueue_style' => $script ) : array( 'wp_enqueue_script' => $script );
	}

	/**
	 * Print the methods to be called by the admin_enqueue_scripts hook
	 *
	 * @param  var $hook      page id or filename passed by admin_enqueue_scripts
	 */
	public function admin_scripts( $hook ) {
		$this->enqueue_on_pages = ( !empty( $this->enqueue_on_pages ) ) ? $this->enqueue_on_pages : array( $hook );

		if ( in_array( $hook, $this->enqueue_on_pages ) ) :
			foreach ( $this->enqueues as $enqueue ) :
				if ( $enqueue === 'wp_enqueue_media' ) :
					$enqueue();
				else :
					foreach( $enqueue as $key => $val ) {
						$key($val, $val);
					}
				endif;
			endforeach;
		endif;
	}

	/**
	 * Injects user's defined pages array into $admin_pages array
	 *
	 * @param  var $pages      array of user's defined pages
	 */
	public function add_pages( $pages ) {
		$this->admin_pages = $pages;

		return $this;
	}

	public function with_sub_page( $title = null ) {
		if ( empty( $this->admin_pages ) ) {
			return $this;
		}

		$adminPage = $this->admin_pages[0];

		$subpage = array(
			array(
				'parent_slug' => $adminPage['menu_slug'],
				'page_title' => $adminPage['page_title'],
				'menu_title' => ($title) ? $title : $adminPage['menu_title'],
				'capability' => $adminPage['capability'],
				'menu_slug' => $adminPage['menu_slug'],
				'callback' => $adminPage['callback']
			)
		);

		$this->admin_subpages = $subpage;

		return $this;
	}

	/**
	 * Injects user's defined pages array into $admin_subpages array
	 *
	 * @param  var $pages      array of user's defined pages
	 */
	public function add_sub_pages( $pages ) {
		$this->admin_subpages = ( count( $this->admin_subpages ) == 0 ) ? $pages : array_merge( $this->admin_subpages, $pages );

		return $this;
	}

	/**
	 * Call WordPress methods to generate Admin pages and subpages
	 */
	public function add_admin_menu() {
		foreach( $this->admin_pages as $page ) {
			add_menu_page( $page['page_title'], $page['menu_title'], $page['capability'], $page['menu_slug'], $page['callback'], $page['icon_url'], $page['position'] );
		}

		foreach( $this->admin_subpages as $page ) {
			add_submenu_page( $page['parent_slug'], $page['page_title'], $page['menu_title'], $page['capability'], $page['menu_slug'], $page['callback'] );
		}
	}

	/**
	 * Injects user's defined settings array into $settings array
	 *
	 * @param  var $args      array of user's defined settings
	 */
	public function add_settings( $args ) {
		$this->settings = $args;

		return $this;
	}

	/**
	 * Injects user's defined sections array into $sections array
	 *
	 * @param  var $args      array of user's defined sections
	 */
	public function add_sections( $args ) {
		$this->sections = $args;

		return $this;
	}

	/**
	 * Injects user's defined fields array into $fields array
	 *
	 * @param  var $args      array of user's defined fields
	 */
	public function add_fields( $args ) {
		$this->fields = $args;

		return $this;
	}

	/**
	 * Call WordPress methods to register settings, sections, and fields
	 */
	public function register_custom_settings() {
		foreach( $this->settings as $setting ) {
			register_setting( $setting["option_group"], $setting["option_name"], ( isset( $setting["callback"] ) ? $setting["callback"] : '' ) );
		}

		foreach( $this->sections as $section ) {
			add_settings_section( $section["id"], $section["title"], ( isset( $section["callback"] ) ? $section["callback"] : '' ), $section["page"] );
		}

		foreach( $this->fields as $field ) {
			add_settings_field( $field["id"], $field["title"], ( isset( $field["callback"] ) ? $field["callback"] : '' ), $field["page"], $field["section"], ( isset( $field["args"] ) ? $field["args"] : '' ) );
		}
	}
}
