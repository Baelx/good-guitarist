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
	$footer_font_color = get_theme_mod( 'gg_footer_font_color', '#000' );
	?>

	<footer id="colophon" class="site-footer container-fluid" role="contentinfo" style="<?php esc_attr_e( 'background-color: ' . get_theme_mod( 'gg_footer_background_color', '#fff' ) ); ?>">
		<h2 style="<?php esc_attr_e( 'color: ' . $footer_font_color ) ?>">
			<?php esc_html_e( get_theme_mod( 'gg_footer_header_text', '' ) ); ?>
		</h2>
		<section class="social-links-footer-section">
			<div class="social-icon-container social-icon-label-youtube">
				<a style="<?php esc_attr_e( 'color: ' . $footer_font_color ) ?>"
				   href="<?php esc_attr_e( get_theme_mod( 'gg_youtube_url', '#' ) ); ?>"
				   class="">
				   <img src="<?php echo get_template_directory_uri() . '/assets/dist/images' ?>" />
				</a>
			</div>
			<div class="social-icon-container social-icon-label-instagram">
				<a style="<?php esc_attr_e( 'color: ' . $footer_font_color ) ?>"
				   href="<?php esc_attr_e( get_theme_mod( 'gg_instagram_url', '#' ) ); ?>"
				   class="dashicons dashicons-instagram">
				</a>
			</div>
			<div class="social-icon-container social-icon-label-facebook">
				<a style="<?php esc_attr_e( 'color: ' . $footer_font_color ) ?>"
				   href="<?php esc_attr_e( get_theme_mod( 'gg_facebook_url', '#' ) ); ?>"
				   class="dashicons dashicons-facebook">
				</a>
			</div>
			<div class="social-icon-container social-icon-label-patreon">
				<a style="<?php esc_attr_e( 'color: ' . $footer_font_color ) ?>"
				   href="<?php esc_attr_e( get_theme_mod( 'gg_patreon_url', '#' ) ); ?>"
				   class="dashicons dashicons-facebook">
				   <svg>
				</a>
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
