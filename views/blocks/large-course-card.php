<?php
use GoodGuitarist\Custom\PostTypes;
$course = PostTypes::get_course_details( $atts['selectedCourseId'] );

// $course_img_src = ! empty( $atts['selectedCourseImageUrl'] ) ? $atts['selectedCourseImageUrl'] : '';
?>
<?php if ( isset( $atts['selectedCourseId'] ) && is_int( $atts['selectedCourseId'] ) ): ?>
<div class="large-course-card">
	<img class="lcc-image" src="<?php echo esc_url( $course['imageUrl'] ); ?>" />
	<div>
		<h3 class="lcc-heading"><?php esc_html_e( $course['courseTitle'] ); ?></h3>
		<div class="lcc-body"><?php esc_html_e( $course['courseDescription'] ); ?></div>
	</div>
	<a class="lcc-button" href="<?php esc_attr_e( $course['courseUrl'] ); ?>"><?php esc_html_e( 'Learn more' ); ?></a>
</div>
<?php endif; ?>
