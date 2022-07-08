<h2 class="related-posts-heading"><?php esc_html_e( 'Related Posts' ); ?></h2>
<ul class="related-youtube-posts">
	<?php if ($related_posts): ?>
		<?php foreach( $related_posts as $post ): ?>
			<li>
				<a href="<?php the_permalink( $post->ID ); ?>">
					<img src="<?php esc_attr_e( $post->atts['videoThumbnail'] ); ?>"/>
					<h3><?php esc_html_e( $post->post_title ); ?></h3>
				</a>
			</li>
		<?php endforeach; ?>
	<?php else: ?>
		<p><?php _e('No related posts to show.'); ?></p>
	<?php endif; ?>
</ul>
