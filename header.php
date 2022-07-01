<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package good-guitarist
 */

$header_classes = 'site-header';
$post = get_post();
$custom_logo = wp_get_attachment_image_url( get_theme_mod( 'custom_logo', 0 ) );

if ( has_blocks( $post->post_content ) ) {
    $blocks = parse_blocks( $post->post_content );
    if ( $blocks[0]['blockName'] === 'core/cover' ) {
		$header_classes .= ' transparent-header';
    }
}
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
	<div id="page" class="site" <?php echo ! is_customize_preview() ?: 'style="padding: 0 40px;"'; ?>>
		<header id="masthead" class="<?php echo esc_attr( $header_classes ) ; ?>" role="banner">
			<?php
			if ( is_customize_preview() ) {
				echo '<div id="awps-header-control"></div>';
			}
			?>
			<div class="container container-fluid">
				<div class="row header-row">
					<div class="col-sm-12 col-md-4">
						<div class="site-branding">
							<h1 class="site-title">
								<a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
									<img src="<?php echo esc_url( $custom_logo ); ?>">
								</a>
							</h1>
						</div><!-- .site-branding -->
					</div><!-- .col -->
					<button class="dashicons dashicons-button dashicons-menu mobile-nav-button"></button>
					<nav id="site-navigation" class="main-navigation" role="navigation" aria-expanded="false">
						<?php
						if ( has_nav_menu( 'primary' ) ) :
							wp_nav_menu(
								array(
									'theme_location' => 'primary',
									'menu_id'        => 'primary-menu',
									'walker'         => new GoodGuitarist\Core\WalkerNav(),
								)
							);
						endif;
						?>
						<form role="search" method="get" class="search-form" action="<?php echo get_site_url(); ?>">
							<label class="search-form-box">
								<span class="screen-reader-text">Search for:</span>
								<input type="search" class="search-field" placeholder="Search …" value="" name="s">
							</label>
							<button type="submit" aria-expanded="false" class="header-search-submit dashicons dashicons-search"></button>
						</form>
						<button class="dashicons dashicons-button dashicons-no-alt close-nav-button"
								aria-hidden="true"
								tabindex="">
						</button>
					</nav>
			</div><!-- .row -->
		</div><!-- .container-fluid -->
	</header><!-- #masthead -->
	<div id="content" class="site-content">
