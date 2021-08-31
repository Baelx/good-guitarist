<?php

namespace GoodGuitarist\Custom;

class AjaxHandler {
	/**
     * Register default hooks and actions.

	 * @return void
     */
	public function register(): void {
		add_action( 'wp_ajax_ypt_ajax_filter_search', [ $this, 'ypt_ajax_filter_search' ] );
		add_action( 'wp_ajax_nopriv_ypt_ajax_filter_search', [ $this, 'ypt_ajax_filter_search' ] );
	}


	/**
	 * Ajax search enqueue for YPT post types.
	 *
	 * @return void
	 */
	public static function ypt_ajax_filter_search_scripts(): void {
		wp_enqueue_script( 'ypt_ajax_filter_search', mix('js/yptAjax.js'), ['jquery'], '1.0.0', true );
		wp_add_inline_script( 'ypt_ajax_filter_search', 'const YPTSEARCHAJAX = ' . json_encode( [
			'ajax_url' => admin_url( 'admin-ajax.php' ),
		 ] ), 'before' );
	}

	/**
	 * Checks if the ajax parameter is set and adds a taxonmy query to the
	 * WP Query if so. If not, returns the taxonomy query.
	 *
	 * @param	string	$tax_slug	The slug of the taxonomy to search in.
	 * @param	string	$ajax_param The parameter to check for in the GET request.
	 * @return	array
	 */
	private function add_tax_query_from_request( string $tax_slug, string $ajax_param, array $tax_query): array {
		if 	( isset( $_GET[ $ajax_param ] ) ) {
			$tax_query[] = [
				'taxonomy' => $tax_slug,
				'field' => 'slug',
				// sanitize_array() in Helpers.php.
				'terms' => sanitize_array( $_GET[ $ajax_param ] )
			];
		}
		return $tax_query;
	}

	/**
	 *
	 *
	 */
	private function add_song_difficulty_meta_query( array $meta_query ): array {
		$difficulty_to_numerical_range_map = [
			'very-beginner' 			=> [ 0, 10 ],
			'beginner'					=> [ 11, 20 ],
			'beginner-to-intermediate'  => [ 21, 30 ],
			'intermediate'				=> [ 31, 40 ],
			'advanced'					=> [ 41, 50 ]
		];

		if ( isset( $_GET['songDifficulty'] ) ) {
			$song_difficulties = sanitize_array( $_GET['songDifficulty'] );

			foreach( $song_difficulties as $difficulty ) {
				$difficulty_range = $difficulty_to_numerical_range_map[$difficulty];

				$meta_query[] = [
					'key'     => 'song_difficulty',
					'value'   => $difficulty_range,
					'type'    => 'numeric',
					'compare' => 'BETWEEN'
				];
			}
		}
		return $meta_query;
	}

	/**
	 * Handle an ajax request.
	 *
	 * @return void
	 */
	public function ypt_ajax_filter_search(): void {
		// Set the content type.
		header("Content-Type: application/json");

		$song_chords_filter = [];
		$meta_query = [ 'relation' => 'AND' ];
		$tax_query = [ 'relation' => 'AND' ];

		// Append additional taxonomy queries to $tax_query.
		$tax_query = $this->add_tax_query_from_request( 'decade', 'songDecade', $tax_query );
		$tax_query = $this->add_tax_query_from_request( 'genre', 'songGenre', $tax_query );
		$tax_query = $this->add_tax_query_from_request( 'chords', 'songChords', $tax_query );
		$tax_query = $this->add_tax_query_from_request( 'beginner-songs-containing-only', 'songBeginner', $tax_query );

		// Save for later to filter by exact chords.
		if ( isset( $_GET['songChordsFilterType'] ) ) {
			$song_chords_filter['chords'] = sanitize_text_field( $_GET['songChords'] );
			$song_chords_filter['filter-type'] = sanitize_text_field( $_GET['songChordsFilterType'] );
		}

		// Add song difficulty meta query.
		// $meta_query = $this->add_song_difficulty_meta_query( $meta_query );

		// Add song contains one barre chord meta query.
		if ( isset( $_GET['songContainsOneBarre'] ) ) {
			$contains_one_barre = sanitize_text_field( $_GET['songContainsOneBarre'] );

			$meta_query[] = array(
				'key'     => 'contains_one_barre',
				'value'   => (boolean) $contains_one_barre,
				'compare' => '='
			);
		}

		// Compile all queries into single WP_Query.
		$search_args = [
			'post_type' => 'youtube-post',
			'posts_per_page' => -1,
			'tax_query' => $tax_query,
			'meta_query' => $meta_query,
		];

		// Run the query.
		$search_query = new \WP_Query( $search_args );

		if ( $search_query->have_posts() ) {

			$result = [];

			while ( $search_query->have_posts() ) {
				$search_query->the_post();

				if ( $song_chords_filter['chords'] && $song_chords_filter['filter-type'] ) {
					$the_post_chords = get_the_terms( get_the_ID(), 'chords' );
				}

				if ( ! false ) {
					$result[] = [
						"id" => get_the_ID(),
						"title" => get_the_title(),
						"content" => parse_blocks(get_the_content()),
						"permalink" => get_permalink(),
						// "year" => get_field('year'),
						// "rating" => get_field('rating'),
						// "director" => get_field('director'),
						// "language" => get_field('language'),
						// "genre" => $cats,
					];
				}
			}

			wp_send_json($result);

		} else {
			// no posts found
			wp_send_json('no worky');
		}
		wp_reset_query();
	}
}
