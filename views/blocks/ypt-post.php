<?php
use GoodGuitarist\Custom\PostTypes;

$upper_slot_courses = [];
if ( $atts['courseSlotOne'] ?? $atts['courseSlotOne'] > 0 ) {
	$upper_slot_courses[] = PostTypes::get_course_details( $atts['courseSlotOne'] );
}
if ( $atts['courseSlotTwo'] ?? $atts['courseSlotTwo'] > 0 ) {
	$upper_slot_courses[] = PostTypes::get_course_details( $atts['courseSlotTwo'] );
}
?>
<div className="youtube-post">
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
	<div class="post-body"><?php esc_html_e( $atts['videoDescription'] ); ?></div>
</div>

