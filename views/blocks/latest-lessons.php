<?php
use GoodGuitarist\Custom\PostTypes;
$youtube_posts = get_posts( [
	'post_type' => 'youtube-post',
	'numberposts' => 10
] );
foreach( $youtube_posts as $post ) {
	$post->parsed_post_atts = PostTypes::get_block_attributes_from_post_content( $post->post_content, 'gutenberg-good-guitarist/ypt' );
}
?>
<div class="latest-lessons-block">
	<div class="lessons-carousel">
		<?php foreach ( $youtube_posts as $lesson ): ?>
			<?php if ( is_array( $lesson->parsed_post_atts ) ): ?>
				<?php $ypt_atts = $lesson->parsed_post_atts; ?>
				<a class="lesson-link" aria-hidden="false" href=<?php esc_attr_e( get_permalink( $lesson->ID ) ); ?>>
					<img class="lesson-thumbnail" src="<?php esc_attr_e( $ypt_atts['videoThumbnail'] ); ?>"></img>
					<h3 class="lesson-title">
						<?php if ( ( isset( $ypt_atts['artist'] ) && ! empty( $ypt_atts['artist'] ) ) &&
								( isset( $ypt_atts['songTitle'] ) && ! empty( $ypt_atts['songTitle'] ) ) ): ?>
						<div>
							<span><?php esc_html_e( $ypt_atts['artist'] ); ?></span><br />
							<span><?php esc_html_e( $ypt_atts['songTitle'] ); ?></span>
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
