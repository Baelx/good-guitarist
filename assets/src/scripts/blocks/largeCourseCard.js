const { registerBlockType } = wp.blocks;
const { Fragment } = wp.element;
const {
	PlainText,
	RichText,
	MediaUpload,
	BlockControls,
	InspectorControls,
	ColorPalette,
	getColorClass
} = wp.editor;
const { IconButton, RangeControl, PanelBody, SelectControl } = wp.components;
const { useSelect } = wp.data;

registerBlockType( 'gutenberg-good-guitarist/large-course-card', {
	title: 'Large Course Card',
	icon: 'format-image',
	category: 'layout',
	className: 'large-course-card',
	attributes: {
		courseID: {
			type: 'integer',
		},
		courseTitle: {
			type: 'string'
		},
		courseDesc: {
			type: 'string',
		},
		courseLink: {
			type: 'string',
		},
		courseImageID: {
			type: 'integer',
		}
	},

	edit({ attributes, className, setAttributes }) {
		const { courseID } = attributes;

		const courseData = useSelect((select) => {
			return select('core').getEntityRecords('postType', 'course');
		});

		const isLoading = useSelect((select) => {
			return select('core/data').isResolving('core', 'getEntityRecords', [
				'postType', 'course'
			]);
		});

		const courseOptions = [
			{ label: 'Select a course', value: 'selected', disabled: true, default: true }
		];
		const courseDetails = {};
		if ( courseData ) {
			courseData.forEach((course) => {
				if (course.id) {
					// Create options for SelectControl.
					courseOptions.push({label: course.title.raw, value: course.id});
					// Keep separate courseDetail objects used to populate attributes.
					courseDetails[course.id] = {
						title: course.title.raw,
						description: course.meta.course_description,
						url: course.meta.course_url,
						image: course.featured_media
					}
				}
			})
		}

		const handleCourseSelect = (selectedCourse) => {
			// if (courseDetails && courseDetails[selectedCourse]) {
					setAttributes({
						courseID: parseInt(selectedCourse),
						courseTitle: courseDetails[selectedCourse].title,
						courseDesc: courseDetails[selectedCourse].description,
						courseImageID: courseDetails[selectedCourse].image,
						courseLink: courseDetails[selectedCourse].url,
					});
			// }
		}

		return (
			<div className={className}>
				<h2>Large Course Card</h2>
				{ isLoading && <span>Loading...</span>}
				{ courseOptions &&
				<SelectControl
					label="Select course"
					value={ courseID }
					options={ courseOptions }
					onChange={ handleCourseSelect }
				/>
				}
			</div>
		);
	},
	save() {
		return null;
	}
});
