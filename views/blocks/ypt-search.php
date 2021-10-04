<?php
use GoodGuitarist\Custom\AjaxHandler;
AjaxHandler::ypt_ajax_filter_search_scripts();
?>
<div id="ypt-ajax-filter-search">
        <form action="" method="get">
            <div class="column-wrap">
                <div class="column">
                    <label class="search-label" for="songSearchText"><?php esc_html_e('Search by song title, description.'); ?></label>
                    <input type="text" name="songSearchText" id="songSearchText">
                </div>
            </div>
			<?php if ( $ypt_terms['genre'] ?? null ): ?>
				<fieldset class="column search-filter">
					<legend class="search-label"><?php esc_html_e('Genre') ?></legend>
						<?php foreach ( $ypt_terms['genre'] as $genre_term ): ?>
							<label class="checkbox" for="<?php echo esc_attr( $genre_term['slug'] ); ?>">
								<?php echo esc_html( $genre_term['name'] ); ?>
								<input type="checkbox"
										name="songGenre"
										id="<?php echo esc_attr( $genre_term['slug'] ); ?>"
										value="<?php echo esc_attr( $genre_term['slug'] ); ?>"
								>
								<span class="checkmark">
							</label>
						<?php endforeach; ?>
				</fieldset>
			<?php endif; ?>
			<?php if ( $ypt_terms['decade'] ?? null ): ?>
				<fieldset class="column search-filter">
					<legend class="search-label"><?php esc_html_e('Decade') ?></legend>
						<?php foreach ( $ypt_terms['decade'] as $decade_term ): ?>
							<label class="checkbox" for="<?php echo esc_attr( $decade_term['slug'] ); ?>">
								<?php echo esc_html( $decade_term['name'] ); ?>
								<input type="checkbox"
										name="songDecade"
										id="<?php echo esc_attr( $decade_term['slug'] ); ?>"
										value="<?php echo esc_attr( $decade_term['slug'] ); ?>"
								>
								<span class="checkmark">
							</label>
						<?php endforeach; ?>
				</fieldset>
			<?php endif; ?>
			<?php if ( $ypt_meta['difficulty'] ?? null ): ?>
				<fieldset class="column search-filter">
					<legend class="search-label"><?php esc_html_e('Difficulty') ?></legend>
						<label class="checkbox" for="very-beginner">
							<?php esc_html_e('Very Beginner'); ?>
							<input type="checkbox"
									name="songDifficulty"
									id="very-beginner"
									value="very-beginner"
							>
							<span class="checkmark">
						</label>
						<label class="checkbox" for="beginner">
							<?php esc_html_e('Beginner'); ?>
							<input type="checkbox"
									name="songDifficulty"
									id="beginner"
									value="beginner"
							>
							<span class="checkmark">
						</label>
						<label class="checkbox" for="beginner-to-intermediate">
							<?php esc_html_e('Beginner-to-Intermediate'); ?>
							<input type="checkbox"
									name="songDifficulty"
									id="beginner-to-intermediate"
									value="beginner-to-intermediate"
							>
							<span class="checkmark">
						</label>
						<label class="checkbox" for="intermediate">
							<?php esc_html_e('Intermediate'); ?>
							<input type="checkbox"
									name="songDifficulty"
									id="intermediate"
									value="intermediate"
							>
							<span class="checkmark">
						</label>
						<label class="checkbox" for="advanced">
							<?php esc_html_e('Advanced'); ?>
							<input type="checkbox"
									name="songDifficulty"
									id="advanced"
									value="advanced"
							>
							<span class="checkmark">
						</label>
				</fieldset>
			<?php endif; ?>
			<?php if ( $ypt_terms['chords'] ?? null ): ?>
				<fieldset class="column search-filter">
					<legend class="search-label"><?php esc_html_e('Chords') ?></legend>
						<div class="chord-filter-type-container">
							<label class="radio" for="chords-include">
								Include
								<input type="radio" name="songChordsFilterType" id="chords-include" value="include">
								<span class="dot"></span>
							</label>
							<label class="radio" for="chords-exact">
								Exact
								<input type="radio" name="songChordsFilterType" id="chords-exact" value="exact">
								<span class="dot"></span>
							</label>
						</div>
						<?php foreach ( $ypt_terms['chords'] as $chords_term ): ?>
							<label class="checkbox" for="<?php echo esc_attr( $chords_term['slug'] ); ?>">
								<?php echo esc_html( $chords_term['name'] ); ?>
								<input type="checkbox"
										name="songChords"
										id="<?php echo esc_attr( $chords_term['slug'] ); ?>"
										value="<?php echo esc_attr( $chords_term['slug'] ); ?>"
								>
								<span class="checkmark">
							</label>
						<?php endforeach; ?>
				</fieldset>
			<?php endif; ?>
			<?php if ( $ypt_terms['beginner-songs-containing-only'] ?? null ): ?>
				<fieldset class="column search-filter">
					<legend class="search-label"><?php esc_html_e('Beginner Songs(Containing Only...)') ?></legend>
						<?php foreach ( $ypt_terms['beginner-songs-containing-only'] as $beginner_song_term ): ?>
							<label class="checkbox" for="<?php echo esc_attr( $beginner_song_term['slug'] ); ?>">
								<?php echo esc_html( $beginner_song_term['name'] ); ?>
								<input type="checkbox"
										name="songBeginner"
										id="<?php echo esc_attr( $beginner_song_term['slug'] ); ?>"
										value="<?php echo esc_attr( $beginner_song_term['slug'] ); ?>"
								>
								<span class="checkmark">
							</label>
						<?php endforeach; ?>
				</fieldset>
			<?php endif; ?>
			<div class="single-button-filters-container">
				<label class="checkbox single-button-filter-label" for="contains-one-barre-chord">
					Songs that contain only one barre chord
					<input type="checkbox"
							name="songContainsOneBarre"
							id="contains-one-barre-chord"
					>
					<span class="checkmark">
				</label>
			</div>
            <input class="btn search-btn" type="submit" id="submit" name="submit" value="Search">
        </form>
        <ul id="ypt-ajax-search-results"></ul>
    </div>
