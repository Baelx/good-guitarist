/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

module.exports = window["jQuery"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************************!*\
  !*** ./assets/src/scripts/yptSearch.js ***!
  \*****************************************/
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "jquery");
/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "jquery");


var _lodash = lodash,
    chunk = _lodash.chunk;
/**
 * Add search action and verify the form checkboxes. Return their data.
 *
 * @param {HTMLElement} form
 * @param {Array|null} songFilterCheckboxes
 * @returns {array}
 */

var verifyAndReturnSearchFormData = function verifyAndReturnSearchFormData(form, songFilterCheckboxes) {
  var formData = {
    action: "ypt_ajax_filter_search",
    songSearchText: 0 !== form.find("#songSearchText").val().length ? form.find("#songSearchText").val() : null
  };

  if (songFilterCheckboxes) {
    songFilterCheckboxes.forEach(function (val) {
      formData[val] = getCheckedSongFilters(val);
    });
  }

  return formData;
};
/**
 * Find all the checked song filters and return the selections.
 *
 * @param {string} inputName The name of the checkbox fieldset to get data from.
 * @returns {Array}
 */


var getCheckedSongFilters = function getCheckedSongFilters(inputName) {
  var value = [];
  var inputs = document.querySelectorAll("#ypt-ajax-filter-search input[name=\"".concat(inputName, "\"]:checked"));
  Array.prototype.forEach.call(inputs, function (element) {
    if ('radio' === element.type) {
      value = element.value;
    } else if ('checkbox' === element.type && "contains-one-barre-chord" !== element.id) {
      value.push(element.value);
    } else if ("contains-one-barre-chord" === element.id) {
      value = element.checked;
    }
  });
  return value;
};
/**
 * Send the AJAX request to the server. Check if the search results element
 * can be found before making the request.
 *
 * @param {HTMLElement} yptSearchResultsElement
 * @param {Object} searchFormData
 * @returns {undefined}
 */


var sendAjaxRequest = function sendAjaxRequest(yptSearchResultsElement, searchFormData) {
  var yptSearchResultsCountElement = $('.search-results-count .count');

  if (yptSearchResultsElement) {
    $.ajax({
      // Global variable YPTSEARCHAJAX created by wp_inline_script().
      url: YPTSEARCHAJAX.ajax_url,
      data: searchFormData,
      success: function success(response) {
        yptSearchResultsElement.empty();
        yptSearchResultsCountElement.each(function () {
          $(this).text(response.data.length);
        });
        paginateSearchResults(response.data, yptSearchResultsElement);
      }
    });
  }
};
/**
 *
 * @param {*} results
 * @param {*} yptSearchResultsElement
 */


var populateSearchResults = function populateSearchResults(results, yptSearchResultsElement) {
  results.forEach(function (post) {
    var html = "<li class='ypt-result' id='ypt-" + post.id + "'>";
    html += "  <a href='" + post.permalink + "' title='" + post.title + "'>";
    html += "	   <img src='" + post.content[0].attrs.videoThumbnail + "' />";
    html += "      <div class='ypt-info'>";
    html += "          <h3>" + post.title + "</h3>";
    html += "      </div>";
    html += "  </a>";
    html += "</li>";
    yptSearchResultsElement.append(html);
  });
};
/**
 *
 * @param {*} results
 * @param {*} yptSearchResultsElement
 */


var paginateSearchResults = function paginateSearchResults(results, yptSearchResultsElement, yptSearchResultsCountElement) {
  var resultsPerPage = 6;
  var yptSearchPreviousPageButton = $('.search-results-controls .previous-page');
  var yptSearchNextPageButton = $('.search-results-controls .next-page');
  var yptSearchResultsPageCountElement = $('.search-results-page-count');
  yptSearchPreviousPageButton.prop("disabled", false).css("cursor", "pointer");
  yptSearchNextPageButton.prop("disabled", false).css("cursor", "pointer");
  yptSearchResultsPageCountElement.find('.current-page').text('1');
  yptSearchResultsPageCountElement.find('.last-page').text('1');
  yptSearchResultsElement.empty();

  if (results.length >= resultsPerPage) {
    var chunkedResults = chunk(results, resultsPerPage);
    yptSearchResultsPageCountElement.find('.current-page').text('1');
    yptSearchResultsPageCountElement.find('.last-page').text(chunkedResults.length);
    populateSearchResults(chunkedResults[0], yptSearchResultsElement, yptSearchResultsCountElement); // Event listeners for previous and next page buttons.

    yptSearchPreviousPageButton.on('click', function (e) {
      var newPageCount = updatePageCount(e.target, false, chunkedResults.length, yptSearchResultsPageCountElement);
      yptSearchResultsElement.empty();
      populateSearchResults(chunkedResults[newPageCount], yptSearchResultsElement, yptSearchResultsCountElement);
    });
    yptSearchNextPageButton.on('click', function (e) {
      var newPageCount = updatePageCount(e.target, true, chunkedResults.length, yptSearchResultsPageCountElement);
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
};
/**
 *
 * @param {*} changePageButton
 * @param {*} increasePage
 * @param {*} pageCount
 * @param {*} yptSearchResultsPageCountElement
 * @returns
 */


var updatePageCount = function updatePageCount(changePageButton, increasePage, pageCount, yptSearchResultsPageCountElement) {
  var $pageCountElement = $(changePageButton).parent().first().find('.search-results-page-count .current-page').first();
  var currentPage = Number($pageCountElement.data('page'));
  var humanCurrentPage = currentPage + 1;

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
};
/**
 * Set aria-expanded attributes for mobile devices(less than 901px wide).
 *
 * @param {HTMLElement} buttonElement
 */


var setSearchFiltersAriaExpandedIfMobile = function setSearchFiltersAriaExpandedIfMobile(buttonElement) {
  if (window.innerWidth < 901) {
    buttonElement.setAttribute('aria-expanded', "false");
  } else {
    buttonElement.setAttribute('aria-expanded', "true");
  }
};
/**
 * Allow search filters to collapse and expand on mobile(less than 901px wide).
 */


var searchFiltersMobile = function searchFiltersMobile() {
  var searchFiltersButtonElement = document.querySelector('.filters-expand-button');
  var searchFiltersButtonArrowElement = searchFiltersButtonElement.querySelector('span');
  var searchFiltersElement = document.querySelector('.search-filters-section');
  window.addEventListener("resize", function () {
    setSearchFiltersAriaExpandedIfMobile();

    if (window.innerWidth < 901) {
      searchFiltersElement.style.height = "0px";
    } else {
      searchFiltersElement.style.height = "450px";
    }
  });
  setSearchFiltersAriaExpandedIfMobile(searchFiltersButtonElement);
  searchFiltersButtonElement.addEventListener("click", function (e) {
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
};
/**
 * IIFE.
 *
 *
 */


(function ($) {
  var songFilterCheckboxes = ['songDecade', 'songChords', 'songChordsFilterType', 'songGenre', 'songBeginner', 'songDifficulty', 'songContainsOneBarre'];
  var yptSearchBlock = $("#ypt-ajax-filter-search");
  var yptSearchFiltersForm = yptSearchBlock.find("form");
  var yptSearchResultsElement = yptSearchBlock.find("#ypt-ajax-search-results");
  yptSearchFiltersForm.on('submit', function (e) {
    var searchFormData = verifyAndReturnSearchFormData(yptSearchFiltersForm, songFilterCheckboxes);
    e.preventDefault();
    sendAjaxRequest(yptSearchResultsElement, searchFormData);
  });
  searchFiltersMobile(); // Run request on page load for initial results.

  var searchFormData = verifyAndReturnSearchFormData(yptSearchFiltersForm, null);
  sendAjaxRequest(yptSearchResultsElement, searchFormData);
})(jQuery);
})();

/******/ })()
;