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
	public static function ypt_filter_search_scripts(): void {
		wp_enqueue_script( 'ypt_filter_search', mix('js/yptSearch.js'), [ 'jquery', 'lodash' ], '1.0.0', true );
		wp_add_inline_script( 'ypt_filter_search', 'const YPTSEARCHAJAX = ' . json_encode( [
			'ajax_url' => admin_url( 'admin-ajax.php' ),
		 ] ), 'before' );
	}

	/**
     * Checks for a QF finder search happening and modifies the SQL query to
     * allow for text search(by post name) as well as meta query searches of this
     * same value.
     *
     * @link    https://wordpress.stackexchange.com/a/208939/121243
     * @param   array $sql    The SQL array object for the meta query.
     * @return  array
     */
    public function modify_text_and_meta_sql( array $sql ): array {
        if ( $this->qf_search_term ) {
            global $wpdb;

            // Only modify the SQL "where" once.
            static $has_already_run = false;
            if ( $has_already_run ) {
                return $sql;
            }
            $escaped_like    = '%%' . $wpdb->esc_like( $this->qf_search_term ) . '%%';
            $sql['where']    = sprintf(
                ' AND ( %s OR %s ) ',
                $wpdb->prepare( "{$wpdb->posts}.post_title like %s", $escaped_like ),
                mb_substr( $sql['where'], 5, mb_strlen( $sql['where'] ) )
            );
            $has_already_run = true;
            return $sql;
        } else {
            return $sql;
        }
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
	 * Take a string input from the GET request, convert it to a numerical
	 * array and and populate a meta query for each difficulty range.
	 *
	 * @param	array	$meta_query		Append to an existing meta query.
	 * @return	array
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
					'type'    => 'NUMERIC',
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
			$song_chords_filter['chords'] = sanitize_array( $_GET['songChords'] );
			$song_chords_filter['filter-type'] = sanitize_text_field( $_GET['songChordsFilterType'] );
		}

		// Add song difficulty meta query.
		$meta_query = $this->add_song_difficulty_meta_query( $meta_query );

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
			's' => sanitize_text_field( $_GET['songSearchText'] ),
			'post_type' => 'youtube-post',
			'posts_per_page' => -1,
			'tax_query' => $tax_query,
			'meta_query' => $meta_query,
		];

		// Run the query.
		$search_query = new \WP_Query( $search_args );

		if ( $search_query->have_posts() ) {
			$result["data"] = [];
			$result["status"] = 200;
			// For debugging.
			$result["search_args"] = $search_args;

			while ( $search_query->have_posts() ) {
				$search_query->the_post();

				$is_exact_chord_match = true;
				$the_post_chords = get_the_terms( get_the_ID(), 'chords' );

				if ( is_array( $the_post_chords ) && ! empty( $the_post_chords ) ) {
					$the_post_chords = array_map( function ( $chord_obj ) {
						return $chord_obj->slug;
					}, $the_post_chords );

					sort( $the_post_chords );
				}

				if ( 'exact' === $song_chords_filter['filter-type'] ) {
					sort( $song_chords_filter['chords'] );
					$is_exact_chord_match = $song_chords_filter['chords'] === $the_post_chords;
				}

				// Filter down the songs by exact chord match if applicable.
				if ( $is_exact_chord_match ) {
					$result["data"][] = [
						"id" => get_the_ID(),
						"title" => get_the_title(),
						"content" => parse_blocks( get_the_content() ),
						"permalink" => get_permalink(),
					];
				}
			}

			wp_send_json($result);

		} else {
			// no posts found.
			$result["data"] = [];
			$result["status"] = 404;

			// For debugging.
			$result["search_args"] = $search_args;

			wp_send_json($result);
		}
		wp_reset_query();
	}
}
