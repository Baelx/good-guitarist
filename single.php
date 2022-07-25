<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package good-guitarist
 */

get_header(); ?>

<div class="">

	<div class="row">

		<div class="full-width">

			<div id="primary" class="content-area">
				<main id="main" class="site-main" role="main">

					<?php

					/* Start the Loop */
					while ( have_posts() ) :
						the_post();
						get_template_part( 'views/content', get_post_format() );
					endwhile;

					?>

				</main><!-- #main -->
			</div><!-- #primary -->

		</div><!-- .col- -->

	</div><!-- .row -->

</div><!-- .container -->

<?php
get_footer();
