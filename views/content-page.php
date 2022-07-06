<?php
/**
 * Template part for displaying page content in page.php
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package good-guitarist
 */

$page_title_classes = 'entry-title';

if ( has_blocks( $post->post_content ) ) {
    $blocks = parse_blocks( $post->post_content );
    if ( 'core/cover' === $blocks[0]['blockName'] ) {
		$page_title_classes .= ' front-page-title';
    }
} else if ( is_front_page() ) {
	$page_title_classes .= ' front-page-title';
}
?>
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header">
		<?php the_title( '<h1 class="' . $page_title_classes . '">', '</h1>' ); ?>
	</header><!-- .entry-header -->

	<div class="entry-content">
		<?php
			the_content();
			wp_link_pages(
				array(
					'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'good-guitarist' ),
					'after'  => '</div>',
				)
			);
		?>
	</div><!-- .entry-content -->

</article><!-- #post-## -->
