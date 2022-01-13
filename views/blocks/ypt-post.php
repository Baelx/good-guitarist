<?php
use GoodGuitarist\Custom\PostTypes;

$upper_slot_courses = [];
if ( $atts['courseSlotOne'] ?? false ) {
	$upper_slot_courses[] = PostTypes::get_course_details( $atts['courseSlotOne'] );
}
if ( $atts['courseSlotTwo'] ?? false ) {
	$upper_slot_courses[] = PostTypes::get_course_details( $atts['courseSlotTwo'] );
}
$youtube_iframe_class = empty( $upper_slot_courses ) ? "no-upper-courses" : "";
$taxonomies = PostTypes::get_single_youtube_post_terms_and_meta( get_the_ID() );
$related_posts = PostTypes::get_related_posts( get_the_ID(), 'genre', 5 );

foreach($related_posts as $post) {
	$post->atts = PostTypes::get_block_attributes_from_post_content( $post->post_content, 'gutenberg-good-guitarist/ypt' );
}
?>
<div className="youtube-post">
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
	<div class="youtube-post-video-area">
		<iframe class="<?php esc_attr_e( $youtube_iframe_class ); ?>" width="560" height="515" src="<?php esc_attr_e( $atts['videoURL'])?>" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		<?php if ( ! empty( $upper_slot_courses ) ): ?>
		<div class="upper-course-area">
			<?php foreach( $upper_slot_courses as $course ): ?>
			<div class="small-course-card">
				<img src="<?php esc_attr_e( $course['imageUrl'] ); ?>" alt="" />
				<div class="course-card-body">
					<p class="body-text"><?php esc_html_e( $course['courseDescription'] ); ?></p>
					<a class="course-url-button" target="_blank" href="<?php esc_attr_e( $course['courseUrl'] ); ?>">Get it now!</a>
				</div>
			</div>
			<?php endforeach; ?>
		</div>
		<?php endif; ?>
	</div>
	<div class="youtube-post-chords">
		<span><?php esc_html_e( 'Chords' ); ?>:</span>
		<?php if ( $taxonomies['chords'] ?? false ): ?>
			<?php
				// Keep an index of each looped chord to insert commas after each one except the last.
				$index = 0;
			?>
			<?php foreach ( $taxonomies['chords'] as $key => $chord_term ): ?>
			<?php $index += 1; ?>
			<a href="<?php esc_url( $chord_term['url'] ?? '#' ) ?>"><?php esc_html_e( $chord_term['name'] ); ?></a>
			<?php if ( count( $taxonomies['chords'] ) > 1 && $index !== count( $taxonomies['chords'] ) ): ?><span>, </span><?php endif; ?>
			<?php endforeach; ?>
		<?php endif; ?>
	</div>
	<section class="post-body"><?php esc_html_e( $atts['videoDescription'] ); ?></section>
	<section class="post-footer">
		<h2 class="related-posts-heading"><?php esc_html_e( 'Related Posts' ); ?></h2>
		<ul class="related-youtube-posts">
			<?php foreach( $related_posts as $post ): ?>
				<li>
					<a href="<?php the_permalink( $post->ID ); ?>">
						<img src="<?php esc_attr_e( $post->atts['videoThumbnail'] ); ?>"/>
						<h3><?php esc_html_e( $post->post_title ); ?></h3>
					</a>
				</li>
			<?php endforeach; ?>
		</ul>
	</section>
</div>

