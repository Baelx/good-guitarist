<?php
/**
 * The template for displaying archive pages
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package good-guitarist
 */

get_header(); ?>
<div class="container gutter-10">
	<div class="row">
		<div class="col-sm-12 gutter-2">
			<div id="primary" class="content-area">
				<?php the_archive_title( '<h1 class="page-title">', '</h1>' ); ?>
				<?php the_archive_description( '<div class="archive-description">', '</div>' ); ?>
				<main id="main" class="site-main" role="main">
				<?php if ( have_posts() ): ?>
					<?php
						while ( have_posts() ) :
						the_post();
						get_template_part( 'views/content-archive', get_post_format() );
						endwhile;
					?>
				<?php else : ?>
					<?php get_template_part( 'views/content', 'none' ); ?>
				<?php endif; ?>
				</main><!-- #main -->
			</div><!-- #primary -->
		</div><!-- .col- -->
	</div><!-- .row -->
</div><!-- .container -->
<?php get_footer(); ?>
