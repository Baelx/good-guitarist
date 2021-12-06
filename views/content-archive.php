<?php
/**
 * Template part for displaying content
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package good-guitarist
 */
$the_post = get_post();
$parsed_blocks = parse_blocks( $the_post->post_content );
$ypt_block = array_filter( $parsed_blocks, function( $block ) {
	return 'gutenberg-good-guitarist/ypt' === $block['blockName'];
} );
$ypt_atts = $ypt_block[0]['attrs'];
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
	<footer class="entry-footer">
		<?php GoodGuitarist\Core\Tags::entry_footer(); ?>
	</footer><!-- .entry-footer -->
	<?php endif; ?>
</article><!-- #post-## -->
