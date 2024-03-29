const { chunk } = lodash;

/**
 * Add search action and verify the form checkboxes. Return their data.
 *
 * @param {HTMLElement} form HTML search form.
 * @param {Array|null} songFilterCheckboxes HTML checkboxes to get search data from.
 * @returns {FormData}
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
 * @returns {array}
 */
const getCheckedSongFilters = ( inputName ) => {
	let value = [];
	const inputs = document.querySelectorAll(`#ypt-ajax-filter-search input[name="${inputName}"]:checked`);
	Array.prototype.forEach.call(inputs, (element) => {
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
 * @param {HTMLElement} yptSearchResultsElement
 * @param {Object} searchFormData
 * @returns {void}
 */
const sendAjaxRequest = ( yptSearchResultsElement, searchFormData ) => {
	const yptSearchResultsCountElement = $('.search-results-count .count');
	if (yptSearchResultsElement) {
		$.ajax({
			// Global variable YPTSEARCHAJAX created by wp_inline_script().
			url : YPTSEARCHAJAX.ajax_url,
			data : searchFormData,
			success : (response) => {
				yptSearchResultsElement.empty();
				yptSearchResultsCountElement.each(function() {
					$(this).text(response.data.length);
				});
				paginateSearchResults(response.data, yptSearchResultsElement);
			}
		});
	}
}

/**
 * Add HTML for each search result returned.
 * 
 * @param {*} results All search results.
 * @param {*} yptSearchResultsElement HTML element to append results to.
 * @return {void}
 */
const populateSearchResults = (results, yptSearchResultsElement) => {
	results.forEach((post) => {
		const videoThumbnail = post.content.length > 0 ? post.content[0]?.attrs?.videoThumbnail : '';
		let html = "<li class='ypt-result' id='ypt-" + post.id + "'>";
		html += "  <a href='" + post.permalink + "' title='" + post.title + "'>";
		html += "	   <img src='" + videoThumbnail + "' />";
		html += "      <div class='ypt-info'>";
		html += "          <h3>" + post.title + "</h3>";
		html += "      </div>";
		html += "  </a>";
		html += "</li>";

		yptSearchResultsElement.append(html);
	});
}

/**
 * Break up search results into pages to allow the user to scroll through them chunk by chunk.
 * 
 * @param {array} results Search results to break into sections(paginate).
 * @param {*} yptSearchResultsElement The HTML element where the search results populate into.
 * @param {*} yptSearchResultsCountElement The HTML element that displays the number of search results.
 * @return {void}
 */
const paginateSearchResults = (results, yptSearchResultsElement, yptSearchResultsCountElement) => {
	const resultsPerPage = 6;
	const yptSearchPreviousPageButton = $('.search-results-controls .previous-page');
	const yptSearchNextPageButton = $('.search-results-controls .next-page');
	const yptSearchResultsPageCountElement = $('.search-results-page-count');
	yptSearchPreviousPageButton.prop("disabled", false).css("cursor", "pointer");
	yptSearchNextPageButton.prop("disabled", false).css("cursor", "pointer");
	yptSearchResultsPageCountElement.find('.current-page').text('1');
	yptSearchResultsPageCountElement.find('.last-page').text('1');
	yptSearchResultsElement.empty();
	
	if (results.length > resultsPerPage) {
		const chunkedResults = chunk(results, resultsPerPage);
		yptSearchResultsPageCountElement.find('.current-page').text('1');
		yptSearchResultsPageCountElement.find('.last-page').text(chunkedResults.length);
		populateSearchResults(chunkedResults[0], yptSearchResultsElement, yptSearchResultsCountElement);
		yptSearchPreviousPageButton.off('click');
		yptSearchNextPageButton.off('click');

		// Event listeners for previous and next page buttons.
		yptSearchPreviousPageButton.on('click', (e) => {
			const newPageCount = updatePageCount(e.target, false, chunkedResults.length, yptSearchResultsPageCountElement);
			yptSearchResultsElement.empty();
			populateSearchResults(chunkedResults[newPageCount], yptSearchResultsElement, yptSearchResultsCountElement);
		});
		yptSearchNextPageButton.on('click', (e) => {
			const newPageCount = updatePageCount(e.target, true, chunkedResults.length, yptSearchResultsPageCountElement);
			yptSearchResultsElement.empty();
			populateSearchResults(chunkedResults[newPageCount], yptSearchResultsElement, yptSearchResultsCountElement);
		});
	} else {
		populateSearchResults(results, yptSearchResultsElement, yptSearchResultsCountElement);
		yptSearchPreviousPageButton.prop("disabled", true).css("cursor", "not-allowed");
		yptSearchNextPageButton.prop("disabled", true).css("cursor", "not-allowed");
		yptSearchResultsPageCountElement.find('.current-page').text('1');
		yptSearchResultsPageCountElement.find('.last-page').text('1');
	}

}

/**
 * Handler for updating the page count of search results.
 * 
 * @param {*} changePageButton 
 * @param {*} increasePage
 * @param {*} pageCount
 * @param {*} yptSearchResultsPageCountElement
 * @return {string}
 */
const updatePageCount = (changePageButton, increasePage, pageCount, yptSearchResultsPageCountElement) => {
	const $pageCountElement = $('.search-results-page-count .current-page').first();
	// const $pageCountElement = $(changePageButton).parent().first().find('.search-results-page-count .current-page').first();
	let currentPage = Number($pageCountElement.data('page'));
	let humanCurrentPage = currentPage + 1;

	if (increasePage) {
		if (currentPage < pageCount - 1) {
			yptSearchResultsPageCountElement.find('.current-page').text(humanCurrentPage + 1);
			$pageCountElement.data('page', currentPage + 1);
		}
	} else if (currentPage > 0) {
		yptSearchResultsPageCountElement.find('.current-page').text(humanCurrentPage - 1);
		$pageCountElement.data('page', currentPage - 1);
	}

	return $pageCountElement.data('page');
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
		setSearchFiltersAriaExpandedIfMobile(searchFiltersButtonElement);
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
			searchFiltersElement.style.height = "100%";
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
		'songFeel',
		'songBeginner',
		'songDifficulty',
		'songContainsOneBarre'
	];
	const yptSearchBlock = $("#ypt-ajax-filter-search");
	const yptSearchFiltersForm = yptSearchBlock.find("form");
	const yptSearchResultsElement = yptSearchBlock.find("#ypt-ajax-search-results");

	yptSearchFiltersForm.trigger('reset');
	yptSearchFiltersForm.on('submit',(e) => {
		const searchFormData = verifyAndReturnSearchFormData(yptSearchFiltersForm, songFilterCheckboxes);
		e.preventDefault();
		sendAjaxRequest(yptSearchResultsElement, searchFormData);
	});

	searchFiltersMobile();

	// Run request on page load for initial results.
	const searchFormData = verifyAndReturnSearchFormData(yptSearchFiltersForm, null);
	sendAjaxRequest(yptSearchResultsElement, searchFormData);

})(jQuery);




