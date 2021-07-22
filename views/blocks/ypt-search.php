<?php var_dump( $ypt_terms ) ?>
<div id="my-ajax-filter-search">
        <form action="" method="get">
            <div class="column-wrap">
                <div class="column">
                    <label for="keywords">Search by song title, description.</label>
                    <input type="text" name="keywords" id="keywords">
                </div>
            </div>
            <div class="column-wrap">
                <div class="column">
                    <label for="decade"><?php esc_html_e('Decade') ?></label>
                    <select name="decade" id="decade">
						<option value="any-decade" selected><?php esc_html_e('Any Decade'); ?></option>
						<?php foreach ( $ypt_terms['decade'] as $decade_term ): ?>
							<option value="<?php echo esc_attr( $decade_term['slug'] ); ?>"><?php echo esc_html( $decade_term['name'] ); ?></option>
						<?php endforeach; ?>
                    </select>
                </div>
                <div class="column">
                    <label for="genre"><?php __('Genre') ?></label>
                    <select name="genre" id="genre">
						<option value="any-genre" selected><?php esc_html_e('Any Genre'); ?></option>
						<?php foreach ( $ypt_terms['genre'] as $genre_term ): ?>
							<option value="<?php echo esc_attr( $genre_term['slug'] ); ?>"><?php echo esc_html( $genre_term['name'] ); ?></option>
						<?php endforeach; ?>
                    </select>
                </div>
            </div>
			<div class="column-wrap">
				<div class="column">
					<label for="chords"><?php esc_html_e('Chords'); ?></label>
					<select name="chords" id="chords">
						<option value="any-chords" selected><?php esc_html_e('Any Chords'); ?>
						<?php foreach ( $ypt_terms['chords'] as $chords_term ): ?>
							<option value="<?php echo esc_attr( $chords_term['slug'] ); ?>"><?php echo esc_html( $chords_term['name'] ); ?></option>
							<?php endforeach; ?>
						</select>
				</div>
				<div class="column">
					<label for="beginner-songs"><?php esc_html_e('Beginner Songs(Containing Only...)'); ?></label>
					<select name="beginner-songs" id="beginner-songs">
						<option value="all-beginner-songs" selected><?php esc_html_e('All '); ?>
						<?php foreach ( $ypt_terms['beginner-songs-containing-only'] as $beginner_song_term ): ?>
							<option value="<?php echo esc_attr( $beginner_song_term['slug'] ); ?>"><?php echo esc_html( $beginner_song_term['name'] ); ?></option>
							<?php endforeach; ?>
						</select>
				</div>
			</div>

            <input type="submit" id="submit" name="submit" value="Search">
        </form>
        <ul id="ajax_filter_search_results"></ul>
    </div>
