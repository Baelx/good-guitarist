import Carousel from './modules/carousel';

const carousel = new Carousel();

const $siteNav = $('#site-navigation');
const $headerSearchButton = $('.header-search-submit');

$('.mobile-nav-button').on('click', () => {
	if ('false' === $siteNav.attr('aria-expanded')) {
		$siteNav.fadeIn();
		$siteNav.attr('aria-expanded', 'true');

		// No scroll on body when nav menu is visible.
		$('body').style('overflow-y', 'hidden');
	}
});
$('.close-nav-button').on('click', () => {
	$siteNav.fadeOut();
	$siteNav.attr('aria-expanded', 'false');

	// No scroll on body when nav menu is visible.
	$('body').style('overflow-y', 'hidden');
});

// Header nav search button.
$headerSearchButton.on('click', (e) => {
	if ("false" === $headerSearchButton.attr("aria-expanded")) {
		e.preventDefault();
		$('.search-form-box').first().css({ 'width': '150px', 'border-width': '2px' });
		$('.search-form-box').first().attr('aria-hidden', 'false');
		$headerSearchButton.attr('aria-expanded', "true");
		$('.search-form-box').focus();
	}

	// Listen for the escape key as the way to close the expanded search input.
	addEventListener('keydown', (e) => {
		if ("true" === $headerSearchButton.attr("aria-expanded") && 'Escape' === e.key) {
			$('.search-form-box').first().css({ 'width': '0px', 'border-width': '0px' });
			$('.search-form-box').first().attr('aria-hidden', 'true');
			$headerSearchButton.attr('aria-expanded', "false");
			$headerSearchButton.focus();
		}
	});
});


/**
 * Set aria-expanded attributes for mobile devices(less than 901px wide).
 *
 * @param {HTMLElement} buttonElement
 */
//  const setSearchFiltersAriaExpandedIfMobile = (buttonElement) => {
// 	if ( window.innerWidth < 901) {
// 		buttonElement.setAttribute('aria-expanded', "false");
// 	} else {
// 		buttonElement.setAttribute('aria-expanded', "true");
// 	}
// }

// setSearchFiltersAriaExpandedIfMobile();
