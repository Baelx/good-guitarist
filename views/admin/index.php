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
	<h1><?php _e( 'Good Guitarist Settings' ); ?></h1>
	<?php settings_errors(); ?>
	<form method="post" action="options.php">
		<?php settings_fields( 'good_guitarist_options_group' ); ?>
		<?php do_settings_sections( 'good_guitarist_settings' ); ?>
		<?php submit_button(); ?>
	</form>
	<section class="good-guitarist-documentation">
		<h2 style="font-size: 1.5rem;"><?php _e( 'Theme Documentation' ); ?></h2>
		<article>
			<h3><?php _e( 'Blocks' ); ?></h3>
			<div>
				<p><?php _e('
				The Good Guitarist Theme uses Gutenberg blocks. Blocks are the new way in Wordpress
				to edit posts and pages. With blocks, you can do a lot more than just entering text content.
				Blocks can provide all kinds of functionality and allow for posts and pages to be highly
				customizable in their look and feel. Blocks are Wordpress’ answer to so-called “theme builders” like
				Divi, Elementor, etc.'); ?></p>
				<p class="inline" style="display:inline;"><?php _e( 'To learn about the Wordpress built-in blocks, see ' ); ?></p>
				<a class="inline" style="display:inline;" href="https://gogutenberg.com/blocks/"><?php _e( 'here' ); ?></a>
				<p>
				<?php _e('
				In addition to the built-in blocks, this theme comes with a handful of custom-built
				blocks. These are:
				'); ?>
				</p>
				<ul style="list-style-type: disc; margin-left: 2rem;">
					<li><?php _e( 'Youtube post template. Allows you to easily pull information from a youtube video. This block appears by default when creating a new Youtube Post.' ); ?>
					<li><?php _e( 'Call to action template. Allows for the entry of call to action content.' ); ?>
					<li><?php _e( 'Small call to action.' ); ?>
					<li><?php _e( 'Large call to action.' ); ?>
					<li><?php _e( 'Latest lessons carousel.' ); ?>
					<li><?php _e( 'Section. Used as a wrapper around any other block to add left and right margin(or "gutters").' ); ?>
					<li><?php _e( 'Youtube post search. Typically you want to pick a page to place this and make it the only block on the page. For example, make a new page called “Song Search” then place the Youtube Post Search block on it.' ); ?>
				</ul>
			</div>
			<h3><?php _e( 'Post Types' ); ?></h3>
			<ul style="list-style-type: disc; margin-left: 2rem;">
				<li><?php _e('Youtube Post.'); ?></h4>
				<?php _e('
				Youtube Posts are what you use when you want to pull information from
				a Youtube Video.')?>
				<li><?php _e('Call to Action.'); ?></h3>
				<?php _e('Call to actions are for any time you
				want to advertise something. Be that a course, your patreon or other social media pages,
				e-books, etc. Call to actions are entered as posts. You can then display them anywhere
				on your site with the Small or Large Call to Action blocks.
				'); ?>
			</ul>
		</article>
	</section>
</div>
