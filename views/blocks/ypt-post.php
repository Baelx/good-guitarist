<?php
use GoodGuitarist\Custom\PostTypes;

$upper_slot_courses = [];
if ( $atts['courseSlotOne'] ?? false ) {
	$upper_slot_courses[] = PostTypes::get_course_details( $atts['courseSlotOne'] );
}
if ( $atts['courseSlotTwo'] ?? false ) {
	$upper_slot_courses[] = PostTypes::get_course_details( $atts['courseSlotTwo'] );
}


$taxonomies = PostTypes::get_single_youtube_post_terms_and_meta( get_the_ID() );
?>
<div className="youtube-post">
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
		<iframe width="560" height="515" src="<?php esc_attr_e( $atts['videoURL'])?>" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		<div class="upper-course-area">
			<?php if ( ! empty( $upper_slot_courses ) ): ?>
				<?php foreach( $upper_slot_courses as $course ): ?>
				<div class="small-course-card">
					<img src="<?php esc_attr_e( $course['imageUrl'] ); ?>" alt="" />
					<div class="course-card-body">
						<p class="body-text"><?php esc_html_e( $course['courseDescription'] ); ?></p>
						<a class="course-url-button" target="_blank" href="<?php esc_attr_e( $course['courseUrl'] ); ?>">Get it now!</a>
					</div>
				</div>
				<?php endforeach; ?>
			<?php endif; ?>
		</div>
	</div>
	<div class="youtube-post-chords">
		<span><?php esc_html_e( 'Chords' ); ?>:</span>
		<?php foreach ( $taxonomies['chords'] as $chord_term ): ?>
		<span><?php esc_html_e( $chord_term['name'] ); ?></span>
		<?php endforeach; ?>
	</div>
	<div class="post-body"><?php esc_html_e( $atts['videoDescription'] ); ?></div>
</div>

