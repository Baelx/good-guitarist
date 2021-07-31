<?php
// var_dump( $ypt_terms )
use GoodGuitarist\Custom\PostTypes;
PostTypes::ypt_ajax_filter_search_scripts();

?>
<div id="ypt-ajax-filter-search">
        <form action="" method="get">
            <div class="column-wrap">
                <div class="column">
                    <label for="songSearchText"><?php esc_html_e('Search by song title, description.'); ?></label>
                    <input type="text" name="songSearchText" id="songSearchText">
                </div>
            </div>
            <div class="column-wrap">
				<?php if ( $ypt_terms['decade'] ?? null ): ?>
					<fieldset class="column">
						<legend><?php esc_html_e('Decade') ?></legend>
							<?php foreach ( $ypt_terms['decade'] as $decade_term ): ?>
								<label for="<?php echo esc_attr( $decade_term['slug'] ); ?>">
									<input type="checkbox"
										   name="songDecade"
										   id="<?php echo esc_attr( $decade_term['slug'] ); ?>"
										   value="<?php echo esc_attr( $decade_term['slug'] ); ?>"
									>
									<?php echo esc_html( $decade_term['name'] ); ?>
								</label>
							<?php endforeach; ?>
					</fieldset>
				<?php endif; ?>
				<?php if ( $ypt_terms['genre'] ?? null ): ?>
					<fieldset class="column">
						<legend><?php esc_html_e('Genre') ?></legend>
							<?php foreach ( $ypt_terms['genre'] as $genre_term ): ?>
								<label for="<?php echo esc_attr( $genre_term['slug'] ); ?>">
									<input type="checkbox"
										   name="songGenre"
										   id="<?php echo esc_attr( $genre_term['slug'] ); ?>"
										   value="<?php echo esc_attr( $genre_term['slug'] ); ?>"
									>
									<?php echo esc_html( $genre_term['name'] ); ?>
								</label>
							<?php endforeach; ?>
					</fieldset>
				<?php endif; ?>
            </div>
			<div class="column-wrap">
				<?php if ( $ypt_terms['chords'] ?? null ): ?>
					<fieldset class="column">
						<legend><?php esc_html_e('Chords') ?></legend>
							<?php foreach ( $ypt_terms['chords'] as $chords_term ): ?>
								<label for="<?php echo esc_attr( $chords_term['slug'] ); ?>">
									<input type="checkbox"
										   name="songChords"
										   id="<?php echo esc_attr( $chords_term['slug'] ); ?>"
										   value="<?php echo esc_attr( $chords_term['slug'] ); ?>"
									>
									<?php echo esc_html( $chords_term['name'] ); ?>
								</label>
							<?php endforeach; ?>
					</fieldset>
				<?php endif; ?>
				<?php if ( $ypt_terms['beginner-songs-containing-only'] ?? null ): ?>
					<fieldset class="column">
						<legend><?php esc_html_e('Beginner Songs(Containing Only...)') ?></legend>
							<?php foreach ( $ypt_terms['beginner-songs-containing-only'] as $beginner_song_term ): ?>
								<label for="<?php echo esc_attr( $beginner_song_term['slug'] ); ?>">
									<input type="checkbox"
										   name="songBeginner"
										   id="<?php echo esc_attr( $beginner_song_term['slug'] ); ?>"
										   value="<?php echo esc_attr( $beginner_song_term['slug'] ); ?>"
									>
									<?php echo esc_html( $beginner_song_term['name'] ); ?>
								</label>
							<?php endforeach; ?>
					</fieldset>
				<?php endif; ?>
			</div>
            <input type="submit" id="submit" name="submit" value="Search">
        </form>
        <ul id="ajax_filter_search_results"></ul>
    </div>
