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
/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "jquery");

/**
 * Add search action and verify the form checkboxes. Return their data.
 *
 * @param {*} form
 * @returns {array}
 */

var verifyAndReturnSearchFormData = function verifyAndReturnSearchFormData(form, songFilterCheckboxes) {
  var formData = {
    action: "ypt_ajax_filter_search",
    songSearchText: 0 !== form.find("#songSearchText").val().length ? form.find("#songSearchText").val() : null
  };
  songFilterCheckboxes.forEach(function (val) {
    formData[val] = getCheckedSongFilters(val);
  });
  return formData;
};
/**
 * Find all the checked song filters and return the selections.
 *
 * @param {string} checkboxName The name of the checkbox fieldset to get data from.
 * @returns {array}
 */


var getCheckedSongFilters = function getCheckedSongFilters(checkboxName) {
  var checkboxes = document.querySelectorAll("#ypt-ajax-filter-search input[name=\"".concat(checkboxName, "\"]:checked")),
      values = [];
  Array.prototype.forEach.call(checkboxes, function (element) {
    values.push(element.value);
  });
  return values;
};

(function ($) {
  var yptSearchBlock = $("#ypt-ajax-filter-search");
  var yptSearchFiltersForm = yptSearchBlock.find("form");
  var songFilterCheckboxes = ['songDecade', 'songChords', 'songGenre', 'songBeginner'];
  yptSearchFiltersForm.on('submit', function (e) {
    e.preventDefault();
    var searchFormData = verifyAndReturnSearchFormData(yptSearchFiltersForm, songFilterCheckboxes);
    console.log('form data', searchFormData);
    $.ajax({
      url: YPTSEARCHAJAX.ajax_url,
      data: searchFormData,
      success: function success(response) {
        console.log("haha sick", response);
        yptSearchBlock.find("#ypt-ajax-search-results").empty();

        if (response) {
          response.forEach(function (post) {
            console.log('the post', post);
            var html = "<li class='ypt-result' id='ypt-" + post.id + "'>";
            html += "  <a href='" + post.permalink + "' title='" + post.title + "'>";
            html += "	   <img src='" + post.content[0].attrs.videoThumbnail + "' />";
            html += "      <div class='ypt-info'>";
            html += "          <h3>" + post.title + "</h3>";
            html += "      </div>";
            html += "  </a>";
            html += "</li>";
            yptSearchBlock.find("#ypt-ajax-search-results").append(html);
          });
        } else {
          var html = "<li class='no-result'>No matching movies found. Try a different filter or search keyword</li>";
          yptSearchBlock.find("#ypt-ajax-search-results").append(html);
        }
      }
    });
  });
})(jQuery);
})();

/******/ })()
;