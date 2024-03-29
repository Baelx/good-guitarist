<?php
/**
 * The template for displaying search results pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#search-result
 *
 * @package good-guitarist
 */

get_header(); ?>

<div class="search-results">
	<div id="primary" class="content-area">
		<?php get_search_form(); ?>
		<header>
			<h1 class="page-title">
			<?php esc_html_e( 'Search Results', 'good-guitarist' ); ?>
			</h1>
		</header><!-- .page-header -->
		<main id="main" class="site-main" role="main">
			<?php if ( have_posts() ): ?>
				<?php
					while ( have_posts() ) :
					the_post();
					get_template_part( 'views/content-search', get_post_format() );
					endwhile;
				?>
			<?php else : ?>
				<?php get_template_part( 'views/content', 'none' ); ?>
			<?php endif; ?>
		</main><!-- #main -->
	</div><!-- #primary -->
</div><!-- .container -->

<?php
get_footer();
