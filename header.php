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
$mobile_logo = wp_get_attachment_image_url( get_theme_mod( 'mobile_logo', 0 ) );

if ( has_blocks( $post->post_content ) ) {
    $blocks = parse_blocks( $post->post_content );
    if ( 'core/cover' === $blocks[0]['blockName'] ) {
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
		<header id="masthead" class="<?php echo esc_attr( $header_classes ); ?>" role="banner">
			<?php
			if ( is_customize_preview() ) {
				echo '<div id="awps-header-control"></div>';
			}
			?>
			<div class="">
				<div class="row header-row">
					<div class="site-branding-container">
						<div class="site-branding">
							<h1 class="site-title">
								<a href="<?php echo get_home_url(); ?>">
									<picture>
										<source class="site-title-image" media="(min-width: 500px)" srcset="<?php echo esc_url( wp_get_attachment_url( get_theme_mod( 'custom_logo' ) ) ); ?>">
										<img class="site-title-image-mobile" src="<?php echo get_template_directory_uri() . '/assets/dist/images/good-guitarist-mobile-logo.png' ?>" />
									</picture>
								</a>
							</h1>
						</div><!-- .site-branding -->
					</div><!-- .col -->
					<div class="nav-elements-container">
						<div class="nav-hamburger-container">
							<button class="dashicons dashicons-button dashicons-menu mobile-nav-button"></button>
							<label class="nav-hamburger-label">Menu</label>
						</div>
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
							<button class="dashicons dashicons-button dashicons-no-alt close-nav-button"
									aria-hidden="true"
									tabindex="">
							</button>
						</nav>
						<div class="header-search-btn-container">
							<a href="<?php echo get_home_url( null, '?s=' ); ?>" class="header-search-submit dashicons dashicons-search"></a>
							<label class="nav-search-label">Search</label>
						</div>
					</div>
			</div><!-- .row -->
		</div><!-- .container-fluid -->
	</header><!-- #masthead -->
	<div id="content" class="site-content">
