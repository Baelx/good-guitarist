<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package good-guitarist
 */

?>

	</div><!-- #content -->

	<?php
	if ( is_customize_preview() ) {
		echo '<div id="awps-footer-control" style="margin-top:-30px;position:absolute;"></div>';
	}
	?>

	<footer id="colophon" class="site-footer container-fluid" role="contentinfo">
		<section class="social-links-footer-section">
			<div class="social-icon-container social-icon-label-youtube">
				<i class="fa"></i>
				<p class="social-icon-label">Youtube</p>
			</div>
			<div class="social-icon-container social-icon-label-facebook">
				<i class="fa"></i>
				<p class="social-icon-label">Facebook</p>
			</div>
			<div class="social-icon-container social-icon-label-instagram">
				<i class="fa"></i>
				<p class="social-icon-label">Instagram</p>
			</div>
			<div class="social-icon-container social-icon-label-patreon">
				<i class="fa"></i>
				<p class="social-icon-label">Patreon</p>
			</div>
		</section>
		<div class="site-info">
			<?php
				printf(
					'<a %s href="%s">%s</a>',
					is_customize_preview() ? 'id="awps-footer-copy-control"' : '',
					esc_url( __( 'https://github.com/Alecaddd/awps', 'good-guitarist' ) ),
					esc_html( GoodGuitarist\Api\Customizer::text( 'awps_footer_copy_text' ) )
				);
			?>
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
