<?php
use GoodGuitarist\Custom\AjaxHandler;
AjaxHandler::ypt_filter_search_scripts();
?>
<div id="ypt-ajax-filter-search">
        <form action="" method="get">
			<div class="search-text-section">
				<label class="search-label" for="songSearchText"><?php esc_html_e('Search by song title, description.'); ?></label>
				<div class="search-text-inputs">
					<input type="text" name="songSearchText" id="songSearchText">
					<button class="btn search-btn" type="submit" id="submit"><span class="dashicons dashicons-search"></span></button>
				</div>
				<button class="filters-expand-button" type="button">
					<span class="dashicons dashicons-arrow-down-alt2"></span>
					<?php esc_html_e('Search filters'); ?>
				</button>
			</div>
			<div class="search-filters-section">
				<?php if ( $ypt_terms['chords'] ?? null ): ?>
					<fieldset class="column search-filter">
						<legend class="search-label"><?php esc_html_e('Chords') ?></legend>
							<div class="chord-filter-type-container">
								<label class="radio" for="chords-include">
									<?php esc_html_e( 'Include' ); ?>
									<input type="radio" name="songChordsFilterType" id="chords-include" value="include" checked="checked">
									<span class="dot"></span>
								</label>
								<label class="radio" for="chords-exact">
									<?php esc_html_e( 'Exact' ); ?>
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
			</div>
        </form>
		<div class="song-search-results">
			<?php /* translators: i.e. 99 search results. */ ?>
			<div class="search-results-count"><span class="count"></span><?php esc_html_e( 'result(s)' ); ?></div>
			<ul id="ypt-ajax-search-results"></ul>
			<div class="search-results-controls">
				<?php /* translators: Previous page of search results. */ ?>
				<button class="previous-page"><span class="dashicons dashicons-arrow-left-alt2"></span><?php esc_html_e( 'Previous' ); ?></button>
				<div class="search-results-page-count">
					<?php /* translators: i.e. 1 of 4 page of search results. */ ?>
					<span class="current-page" data-page="0"></span><?php esc_html_e('of'); ?><span class="last-page"></span>
				</div>
				<?php /* translators: Next page of search results. */ ?>
				<button class="next-page"><?php esc_html_e( 'Next' ); ?><span class="dashicons dashicons-arrow-right-alt2"></span></button>
			</div>
		</div>
    </div>
