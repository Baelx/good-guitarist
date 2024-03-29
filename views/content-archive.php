<?php
/**
 * Template part for displaying content
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package good-guitarist
 */
use GoodGuitarist\Custom\PostTypes;
$the_post = get_post();
$ypt_atts = PostTypes::get_block_attributes_from_post_content( $the_post->post_content, 'gutenberg-good-guitarist/ypt' );
?>

<article id="post-<?php the_ID(); ?>" <?php post_class( 'col' ); ?>>
	<?php if ( 'youtube-post' === get_post_type() ): ?>
	<a class="ypt-link-wrapper" aria-label="<?php the_title(); ?>" href="<?php echo esc_url( the_permalink() ); ?>">
		<img src="<?php echo esc_url( $ypt_atts['videoThumbnail'] ); ?>">
		<h2 class="entry-title"><?php the_title(); ?></h2>
	</a>
	<?php else: ?>
	<div class="entry-meta">
		<?php GoodGuitarist\Core\Tags::posted_on();?>
	</div><!-- .entry-meta -->
	<div class="entry-content">
		<?php
		wp_link_pages(
			[
				'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'good-guitarist' ),
				'after'  => '</div>',
				]
			);
		?>
	</div><!-- .entry-content -->
	<?php endif; ?>
</article><!-- #post-## -->
