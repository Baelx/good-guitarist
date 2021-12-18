import Carousel from './modules/carousel';

const carousel = new Carousel();

const $siteNav = $('#site-navigation');

$('.mobile-nav-button').on('click', () => {
	console.log("button")
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
