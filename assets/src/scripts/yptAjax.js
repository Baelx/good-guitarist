'use strict';

/**
 * Add search action and verify the form checkboxes. Return their data.
 *
 * @param {*} form
 * @returns {array}
 */
const verifyAndReturnSearchFormData = ( form, songFilterCheckboxes ) => {
	const formData = {
		action: "ypt_ajax_filter_search",
		songSearchText: (0 !== form.find("#songSearchText").val().length) ? form.find("#songSearchText").val() : null,
	};

	songFilterCheckboxes.forEach((val) => {
		formData[val] = getCheckedSongFilters(val);
	});

	return formData;
}

/**
 * Find all the checked song filters and return the selections.
 *
 * @param {string} checkboxName The name of the checkbox fieldset to get data from.
 * @returns {array}
 */
	const getCheckedSongFilters = ( checkboxName ) => {
	const checkboxes = document.querySelectorAll(`#ypt-ajax-filter-search input[name="${checkboxName}"]:checked`), values = [];
	Array.prototype.forEach.call(checkboxes, (element) => {
		values.push(element.value);
	});
	return values;
}


(($) => {

	const yptSearchFilters = $("#ypt-ajax-filter-search");
	const yptSearchFiltersForm = yptSearchFilters.find("form");
	const songFilterCheckboxes = [
		'songDecade',
		'songChords',
		'songGenre',
		'songBeginner'
	];

	yptSearchFiltersForm.on('submit',(e) => {
		e.preventDefault();

		const searchFormData = verifyAndReturnSearchFormData(yptSearchFiltersForm, songFilterCheckboxes);
		console.log('form data', searchFormData)

		$.ajax({
			url : YPTSEARCHAJAX.ajax_url,
			data : searchFormData,
			success : (response) => {
				console.log("haha sick", response.length);

			}
		});

	});


})(jQuery);


