<h3 class="song-and-artist">
    <a href="<?php echo esc_url( $artist['url'] ); ?>"><?php esc_html_e( $artist['name'] ?? '' ); ?></a>
    <?php if ( ( $artist['name'] ?? false ) && ( $atts['songTitle'] ?? false ) ): ?>
        <span>-</span>
    <?php endif; ?>
    <span><?php esc_html_e( $atts['songTitle'] ?? '' ); ?></span>
</h3>