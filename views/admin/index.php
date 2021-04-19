<?php
/**
 * Template part for displaying a custom Admin area
 *
 * @link https://developer.wordpress.org/reference/functions/add_menu_page/
 *
 * @package good-guitarist
 */

?>

<div class="wrap">
	<h1>Good Guitarist Settings Page</h1>
	<?php settings_errors(); ?>

	<form method="post" action="options.php">
		<?php settings_fields( 'awps_options_group' ); ?>
		<?php do_settings_sections( 'good-guitarist' ); ?>
		<?php submit_button(); ?>
	</form>
</div>
