<?php

namespace GoodGuitarist\Custom;


class Taxonomies {

	/**
	 * @var	array	List of custom taxonomies to register.
	 */
	public $custom_taxonomies;

	/**
	 * Add all taxonomies.
	 *
	 */
	public function __construct() {
		$this->custom_taxonomies = [
			[
				'key' => 'artist',
				'singular_name' => 'Artist',
				'plural_name' => 'Artists',
				'defaults' => []
			],
			[
				'key' => 'genre',
				'singular_name' => 'Genre',
				'plural_name' => 'Genres',
				'defaults' => [
					'Easiest Songs on Guitar',
					'Songs For Practicing Barre Chords',
					'Blues',
					'Rock',
					'Country',
					'Pop',
					'Classic Rock',
					'Blues Rock',
					'Acoustic',
					'Folk',
					'Fingerstyle',
					'Alternative Rock',
					'New Wave',
					'R&B',
					'Reggae',
					'Punk',
					'Indie',
					'Grunge',
					'Oldies',
					'Film/Movies/TV',
					'Holiday/Christmas'
				]
			],
			[
				'key' => 'decade',
				'singular_name' => 'Decade',
				'plural_name' => 'Decades',
				'defaults' => [
					'50\'s and earlier',
					'60\'s',
					'70\'s',
					'80\'s',
					'90\'s',
					'2000\'s',
					'2010\'s',
					'2020\'s',
				]
			],
			[
				'key' => 'feel',
				'singular_name' => 'Feel',
				'plural_name' => 'Feels',
				'defaults' => [
					'Swing',
					'Straight',
				]
			],
			[
				'key' => 'chords',
				'singular_name' => 'Chords',
				'plural_name' => 'Chords',
				'defaults' => [
					'C',
					'A',
					'G',
					'E',
					'D',
					'Am',
					'Em',
					'Dm',
					'F (Easy version)',
					'B7',
					'F (barre)',
					'Bm (barre)'
				]
			],
			[
				'key' => 'beginner-songs-containing-only',
				'singular_name' => 'Beginner Songs - Containing Only...',
				'plural_name' => 'Beginner Songs - Containing Only...',
				'defaults' => [
					'A, D, E',
					'G, C, D',
					'C, F, G',
					'G, Em',
					'E, A',
					'G, D',
					'G, C',
					'G, Em, C, D'
				]
			],
			[
				'key' => 'lesson-style',
				'singular_name' => 'Lesson Style',
				'plural_name' => 'Lesson Styles',
				'defaults' => [
					'Strummer',
					'Lead',
					'Fingerpicker',
					'Simple Strummer'
				]
			],
			[
				'key' => 'lesson-type',
				'singular_name' => 'Type',
				'plural_name' => 'Types',
				'defaults' => [
					'Chords/Strumming',
					'Events',
					'melody',
					'Fingerstyle',
					'Barre Chords',
					'Easy Chords',
					'Solo',
					'Concept'
				]
			],
		];
	}

    /**
     * register default hooks and actions for WordPress
     * @return	void
     */
    public function register(): void {
		add_action( 'init', array( $this, 'register_taxonomies_with_defaults' ) );
    }

	/**
	 * Registers custom taxonomies
	 *
	 * @param	string	$name	Name of custom taxonomy.
	 * @return	void
	 */
	public function register_custom_taxonomy( array $taxonomy ): void {
		$labels = array(
			'name'              => _x( $taxonomy['plural_name'], 'taxonomy general name' ),
			'singular_name'     => _x( $taxonomy['singular_name'], 'taxonomy singular name' ),
			'search_items'      => __( "Search {$taxonomy['plural_name']}" ),
			'all_items'         => __( "All {$taxonomy['plural_name']}" ),
			'parent_item'       => __( "Parent {$taxonomy['singular_name']}" ),
			'parent_item_colon' => __( "Parent {$taxonomy['singular_name']}:" ),
			'edit_item'         => __( "Edit {$taxonomy['singular_name']}" ),
			'update_item'       => __( "Update {$taxonomy['singular_name']}" ),
			'add_new_item'      => __( "Add New {$taxonomy['singular_name']}" ),
			'new_item_name'     => __( "New {$taxonomy['singular_name']} Name" ),
			'menu_name'         => __( $taxonomy['singular_name'] ),
		);
		$args   = array(
			'hierarchical'      => true,
			'labels'            => $labels,
			'show_ui'           => true,
			'show_admin_column' => true,
			'show_in_rest'		=> true,
			'query_var'         => true,
			'meta_box_cb' 		=> 'post_categories_meta_box',
			'rewrite'           => [ 'slug' => $taxonomy['key'] ],
		);
		register_taxonomy( $taxonomy['key'], [ 'youtube-post' ], $args );
	}

	/**
	 * Registers default terms with taxononies.
	 *
	 * @param	array	$default_terms
	 * @return	void
	 */
	public function insert_default_terms( array $default_terms ): void {

	}

	/**
	 * Registers all custom taxonomies above.
	 *
	 * @return	void
	 */
	public function register_taxonomies_with_defaults(): void {
		foreach( $this->custom_taxonomies as $taxonomy ) {
			if ( ! taxonomy_exists( $taxonomy['key'] ) ) {
				$this->register_custom_taxonomy( $taxonomy );
				foreach ( $taxonomy['defaults'] as $term ) {
					wp_insert_term( $term, $taxonomy['key'] );
				}
			}
		}
	}

}
