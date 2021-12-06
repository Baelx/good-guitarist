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
/*!***************************************!*\
  !*** ./assets/src/scripts/yptAjax.js ***!
  \***************************************/
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "jquery");
/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "jquery");

/**
 * Add search action and verify the form checkboxes. Return their data.
 *
 * @param {Element} form
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
    console.log('the element', element.id);

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
 * @param {Element} yptSearchResultsElement
 * @param {Object} searchFormData
 * @returns {undefined}
 */


var sendAjaxRequest = function sendAjaxRequest(yptSearchResultsElement, searchFormData) {
  console.log('the datae', searchFormData);

  if (yptSearchResultsElement) {
    $.ajax({
      // Global variable YPTSEARCHAJAX created by wp_inline_script()
      url: YPTSEARCHAJAX.ajax_url,
      data: searchFormData,
      success: function success(response) {
        console.log(" the response is", response);
        yptSearchResultsElement.empty();

        if (200 === response.status) {
          response.data.forEach(function (post) {
            // console.log('the post', post)
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
        } else {
          var html = "<li class='no-result'>No matching songs found. Try a different filter or search keyword</li>";
          yptSearchResultsElement.append(html);
        }
      }
    });
  }
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
    console.log('form data', searchFormData);
    e.preventDefault();
    sendAjaxRequest(yptSearchResultsElement, searchFormData);
  }); // Run request on page load for initial results.

  var searchFormData = verifyAndReturnSearchFormData(yptSearchFiltersForm, null);
  sendAjaxRequest(yptSearchResultsElement, searchFormData);
})(jQuery);
})();

/******/ })()
;