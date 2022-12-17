import { Carousel } from './modules/carousel';

const $siteNav = $('#site-navigation');

$('.mobile-nav-button').on('click', () => {
	if ('false' === $siteNav.attr('aria-expanded')) {
		$siteNav.fadeIn();
		$siteNav.attr('aria-expanded', 'true');

		// No scroll on body when nav menu is visible.
		$('body').style('overflow-y', 'hidden');
	}
})
$('.close-nav-button').on('click', () => {
	$siteNav.fadeOut();
	$siteNav.attr('aria-expanded', 'false');

	// No scroll on body when nav menu is visible.
	$('body').style('overflow-y', 'hidden');
});

(($) => {
	const carousel = new Carousel();
})(jQuery);


