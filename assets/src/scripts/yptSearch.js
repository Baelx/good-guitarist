'use strict';

/**
 * Add search action and verify the form checkboxes. Return their data.
 *
 * @param {Element} form
 * @param {Array|null} songFilterCheckboxes
 * @returns {array}
 */
const verifyAndReturnSearchFormData = ( form, songFilterCheckboxes ) => {
	const formData = {
		action: "ypt_ajax_filter_search",
		songSearchText: (0 !== form.find("#songSearchText").val().length) ? form.find("#songSearchText").val() : null,
	};

	if (songFilterCheckboxes) {
		songFilterCheckboxes.forEach((val) => {
			formData[val] = getCheckedSongFilters(val);
		});
	}

	return formData;
}

/**
 * Find all the checked song filters and return the selections.
 *
 * @param {string} inputName The name of the checkbox fieldset to get data from.
 * @returns {Array}
 */
const getCheckedSongFilters = ( inputName ) => {
	let value = [];
	const inputs = document.querySelectorAll(`#ypt-ajax-filter-search input[name="${inputName}"]:checked`);
	Array.prototype.forEach.call(inputs, (element) => {
		console.log('the element', element.id)
		if ('radio' === element.type) {
			value = element.value;
		} else if ('checkbox' === element.type && "contains-one-barre-chord" !== element.id) {
			value.push(element.value);
		} else if ("contains-one-barre-chord" === element.id) {
			value = element.checked;
		}
	});
	return value;
}

/**
 * Send the AJAX request to the server. Check if the search results element
 * can be found before making the request.
 *
 * @param {Element} yptSearchResultsElement
 * @param {Object} searchFormData
 * @returns {undefined}
 */
const sendAjaxRequest = ( yptSearchResultsElement, searchFormData ) => {
	console.log('the datae', searchFormData)
	if (yptSearchResultsElement) {
		$.ajax({
			// Global variable YPTSEARCHAJAX created by wp_inline_script()
			url : YPTSEARCHAJAX.ajax_url,
			data : searchFormData,
			success : (response) => {
				console.log(" the response is", response);
				yptSearchResultsElement.empty();
				if (200 === response.status) {
					response.data.forEach((post) => {
						// console.log('the post', post)
						let html = "<li class='ypt-result' id='ypt-" + post.id + "'>";
						html += "  <a href='" + post.permalink + "' title='" + post.title + "'>";
						html += "	   <img src='" + post.content[0].attrs.videoThumbnail + "' />";
						html += "      <div class='ypt-info'>";
						html += "          <h3>" + post.title + "</h3>";
						html += "      </div>";
						html += "  </a>";
						html += "</li>";

						yptSearchResultsElement.append(html);
					})
				} else {
					let html  = "<li class='no-result'>No matching songs found. Try a different filter or search keyword</li>";
					yptSearchResultsElement.append(html);
				}
			}
		});
	}
}

/**
 * Set aria-expanded attributes for mobile devices(less than 901px wide).
 *
 * @param {HTMLElement} buttonElement
 */
const setSearchFiltersAriaExpandedIfMobile = (buttonElement) => {
	if ( window.innerWidth < 901) {
		buttonElement.setAttribute('aria-expanded', "false");
	} else {
		buttonElement.setAttribute('aria-expanded', "true");
	}
}

/**
 * Allow search filters to collapse and expand on mobile(less than 901px wide).
 */
const searchFiltersMobile = () => {
	const searchFiltersButtonElement = document.querySelector('.filters-expand-button');
	const searchFiltersButtonArrowElement = searchFiltersButtonElement.querySelector('span');
	const searchFiltersElement = document.querySelector('.search-filters-section');

	window.addEventListener("resize", () => {
		setSearchFiltersAriaExpandedIfMobile();
		if ( window.innerWidth < 901) {
			searchFiltersElement.style.height = "0px";
		} else {
			searchFiltersElement.style.height = "450px";
		}
	});

	setSearchFiltersAriaExpandedIfMobile(searchFiltersButtonElement);
	searchFiltersButtonElement.addEventListener("click", (e) => {
		e.preventDefault();
		if ("true" === searchFiltersButtonElement.getAttribute("aria-expanded")) {
			searchFiltersElement.style.height = "0px";
			searchFiltersButtonElement.setAttribute('aria-expanded', "false");
			searchFiltersButtonArrowElement.style.transform = "rotate(0deg)";
		} else if ("false" === searchFiltersButtonElement.getAttribute("aria-expanded")) {
			searchFiltersElement.style.height = "450px";
			searchFiltersButtonElement.setAttribute('aria-expanded', "true");
			searchFiltersButtonArrowElement.style.transform = "rotate(180deg)";
		}
	});
}

/**
 * IIFE.
 *
 *
 */
(($) => {
	const songFilterCheckboxes = [
		'songDecade',
		'songChords',
		'songChordsFilterType',
		'songGenre',
		'songBeginner',
		'songDifficulty',
		'songContainsOneBarre'
	];
	const yptSearchBlock = $("#ypt-ajax-filter-search");
	const yptSearchFiltersForm = yptSearchBlock.find("form");
	const yptSearchResultsElement = yptSearchBlock.find("#ypt-ajax-search-results");

	yptSearchFiltersForm.on('submit',(e) => {
		const searchFormData = verifyAndReturnSearchFormData(yptSearchFiltersForm, songFilterCheckboxes);
		console.log('form data', searchFormData)
		e.preventDefault();
		sendAjaxRequest(yptSearchResultsElement, searchFormData);
	});

	searchFiltersMobile();

	// Run request on page load for initial results.
	const searchFormData = verifyAndReturnSearchFormData(yptSearchFiltersForm, null);
	sendAjaxRequest(yptSearchResultsElement, searchFormData);

})(jQuery);



