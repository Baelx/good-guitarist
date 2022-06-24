<h3 class="song-and-artist">
    <span><?php esc_html_e( $artist['name'] ?? '' ); ?></span>
    <?php if ( ( $artist['name'] ?? false ) && ( $atts['songTitle'] ?? false ) ): ?>
        <span>-</span>
    <?php endif; ?>
    <span><?php esc_html_e( $atts['songTitle'] ?? '' ); ?></span>
</h3>