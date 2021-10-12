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

				<div class="row">
					<div class="col-xs-12 col-sm-4">

						<div class="site-branding">
							<h1 class="site-title">
								<a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
									<img src="http://localhost:8000/wp-content/uploads/2021/04/gg-logo-retina.png">
								</a>
							</h1>
					</div><!-- .site-branding -->

				</div><!-- .col -->

				<div class="col-xs-12 col-sm-8 header-navigation">

					<nav id="site-navigation" class="main-navigation" role="navigation">
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
					</nav>

				</div><!-- .col -->

			</div><!-- .row -->
		</div><!-- .container-fluid -->

	</header><!-- #masthead -->

	<div id="content" class="site-content">
