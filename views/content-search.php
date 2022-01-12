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
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<?php if ( 'youtube-post' === get_post_type() ): ?>
		<a class="ypt-link-wrapper" aria-label="<?php the_title(); ?>" href="<?php echo esc_url( the_permalink() ); ?>">
			<img src="<?php echo esc_url( $ypt_atts['videoThumbnail'] ); ?>">
			<h2 class="entry-title"><?php the_title(); ?></h2>
		</a>
	<?php else: ?>

	<?php endif; ?>

	<div class="entry-content">
		<?php
			the_excerpt();
			wp_link_pages(
				array(
					'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'good-guitarist' ),
					'after'  => '</div>',
				)
			);
		?>
	</div><!-- .entry-content -->

	<footer class="entry-footer">
		<?php awps\core\tags::entry_footer(); ?>
	</footer><!-- .entry-footer -->
</article><!-- #post-## -->
