<?php
use GoodGuitarist\Custom\PostTypes;
$youtube_posts = get_posts( [
	'post_type' => 'youtube-post',
	'numberposts' => 10
] );
foreach( $youtube_posts as $post ) {
	$post->parsed_post_atts = PostTypes::get_block_attributes_from_post_content( $post->post_content, 'gutenberg-good-guitarist/ypt' );
	$post->artists = get_the_terms( $post, 'artist' );
}
?>
<div class="latest-lessons-block">
	<div class="lessons-carousel">
		<?php foreach ( $youtube_posts as $lesson ): ?>
			<?php if ( is_array( $lesson->parsed_post_atts ) ): ?>
				<?php $ypt_atts = $lesson->parsed_post_atts; ?>
				<a class="lesson-link" aria-hidden="false" href=<?php esc_attr_e( get_permalink( $lesson->ID ) ); ?>>
					<img class="lesson-thumbnail" src="<?php esc_attr_e( $ypt_atts['videoThumbnail'] ); ?>"></img>
					<div class="lesson-title">
						<?php if ( isset( $ypt_atts['songTitle'] ) && ! empty( $ypt_atts['songTitle'] ) ): ?>
						<div>
							<span class="lesson-song-title"><?php esc_html_e( $ypt_atts['songTitle'] ); ?></span><br />
							<div class="lesson-artists">
								<?php foreach( $lesson->artists as $key => $value): ?>
									<span class="lesson-artist"><?php esc_html_e( $value->name ); ?></span>
									<?php if ( $key !== ( count( $lesson->artists ) - 1 ) ): ?>
									<span>,</span>
									<?php endif; ?>
								<?php endforeach; ?>
							</div>
						</div>
						<?php else: ?>
						<span class="view-lesson"><?php esc_html_e('View lessson'); ?></span>
						<?php endif; ?>
					</div>
				</a>
			<?php endif; ?>
		<?php endforeach; ?>
	</div>
</div>
