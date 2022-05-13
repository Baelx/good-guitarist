<h3 class="song-and-artist">
	<span><?php esc_html_e( $taxonomies['artist'] ?? '' ); ?></span>
	<?php if ( ( $taxonomies['artist'] ?? false ) && ( $atts['songtitle'] ?? false ) ): ?>
		<span>-</span>
	<?php endif; ?>
	<span><?php esc_html_e( $atts['songTitle'] ?? '' ); ?></span>
</h3>
<ul class="youtube-post-term-pills">
	<?php foreach ( $taxonomies as $tax_key => $tax_value ): ?>
		<?php if ( 'chords' !== $tax_key && 'beginner-songs-containing-only' !== $tax_key ): ?>
			<?php if ( ! empty( $tax_value) ): ?>
				<?php foreach ( $tax_value as $term ): ?>
				<li class="term-pill"><a href="<?php echo esc_url( $term['url'] ); ?>"><?php esc_html_e( $term['name'] ); ?></a></li>
				<?php endforeach; ?>
			<?php endif; ?>
		<?php endif; ?>
	<?php endforeach; ?>
</ul>
