<?php
/**
 * Template part for displaying results in search pages
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package good-guitarist
 */

use GoodGuitarist\Custom\PostTypes;
$the_post = get_post();
$ypt_atts = PostTypes::get_block_attributes_from_post_content( $the_post->post_content, 'gutenberg-good-guitarist/ypt' );
$post_thumbnail = get_template_directory_uri() . "/assets/dist/images/good-guitarist-preview-img.png";

if ( has_post_thumbnail() ) {
	$post_thumbnail = get_the_post_thumbnail();
}
if ( 'youtube-post' === get_post_type() ) {
	$post_thumbnail = $ypt_atts['videoThumbnail'];
}
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<img src="<?php echo esc_url( $post_thumbnail ); ?>">
	<div class="search-result-text">
		<a class="link-wrapper"
		aria-label="<?php the_title(); ?>"
		href="<?php echo esc_url( the_permalink() ); ?>">
		<?php the_title(); ?>
		</a>
		<div class="entry-content">
			<?php the_excerpt(); ?>
		</div>
	</div>
</article>
