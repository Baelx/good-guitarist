<?php
$youtube_posts = get_posts( [
	'post_type' => 'youtube-post',
	'numberposts' => 10
] );
foreach( $youtube_posts as $post ) {
	$parsed_blocks = parse_blocks( $post->post_content );
	/**
	 * The youtube post may use multiple blocks but only find the
	 * (hopefully) single instance of the ypt block
	 * in order to get its attributes.
	 */
	$ypt_block = array_filter( $parsed_blocks, function( $block ) {
		return 'gutenberg-good-guitarist/ypt' === $block['blockName'];
	} );
	$post->parsed_ypt = $ypt_block[0];
}
// var_dump($youtube_posts);
?>
<div class="latest-lessons-block">
	<div class="lessons-carousel">
		<?php foreach ( $youtube_posts as $lesson ): ?>
			<?php if ( is_array( $lesson->parsed_ypt ) ): ?>
				<?php $ypt_attrs = $lesson->parsed_ypt['attrs']; ?>
				<a class="lesson-link" aria-hidden="false" href=<?php esc_attr_e( get_permalink( $lesson->ID ) ); ?>>
					<img class="lesson-thumbnail" src="<?php esc_attr_e( $ypt_attrs['videoThumbnail'] ); ?>"></img>
					<h3 class="lesson-title">
						<?php if ( ( isset( $ypt_attrs['artist'] ) && ! empty( $ypt_attrs['artist'] ) ) &&
								( isset( $ypt_attrs['songTitle'] ) && ! empty( $ypt_attrs['songTitle'] ) ) ): ?>
						<div>
							<span><?php esc_html_e( $ypt_attrs['artist'] ); ?></span><br />
							<span><?php esc_html_e( $ypt_attrs['songTitle'] ); ?></span>
						</div>
						<?php else: ?>
						<span><?php __('View lessson'); ?></span>
						<?php endif; ?>
					</h3>
				</a>
			<?php endif; ?>
		<?php endforeach; ?>
	</div>
</div>
