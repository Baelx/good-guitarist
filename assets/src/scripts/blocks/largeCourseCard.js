const { registerBlockType } = wp.blocks;
const { Fragment, useState } = wp.element;
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
const { parse } = wp.blockSerializationDefaultParser;
const { __ } = wp.i18n;

registerBlockType( 'gutenberg-good-guitarist/large-course-card', {
	title: 'Large Course Card',
	icon: 'format-image',
	category: 'layout',
	className: 'large-course-card',
	attributes: {
		selectedCourseId: {
			type: 'integer',
			default: 0
		},
		selectedCourseTitle: {
			type: 'string',
			default: ''
		},
		selectedCourseDesc: {
			type: 'string',
			default: ''
		},
		selectedCourseLink: {
			type: 'string',
			default: ''
		},
		selectedCourseImageID: {
			type: 'integer',
			default: 0
		},
		selectedCourseImageUrl: {
			type: 'string',
			default: ''
		}
	},

	edit({ attributes, className, setAttributes }) {
		const { selectedCourseId  } = attributes;

		const courseData = useSelect((select) => {
			return select('core').getEntityRecords('postType', 'course');
		});

		const isLoading = useSelect((select) => {
			return select('core/data').isResolving('core', 'getEntityRecords', [
				'postType', 'course'
			]);
		});

		const courseOptions = [
			{ label: 'Select a course', value: null, default: true }
		];
		const courseDetails = {};
		if ( courseData ) {
			courseData.forEach((course) => {
				if (course.id) {
					const parsedBlocks = parse(course.content.raw);
					/**
					 * There may be multiple blocks in the course post.
					 *
					 * Find the course template block(which should be the first)
					 * and get its attributes.
					 */
					const courseTemplateBlock = parsedBlocks.find(block => 'gutenberg-good-guitarist/course-template' === block.blockName);
					const courseAtts = courseTemplateBlock.attrs;
					if (courseAtts) {
						// Create options for SelectControl.
						courseOptions.push({label: course.title.raw, value: course.id});
						// Keep separate courseDetail objects used to populate attributes.
						courseDetails[course.id] = {
							title: course.title.raw,
							description: courseAtts.courseDescription,
							url: courseAtts.courseUrl,
							imageId: courseAtts.imageId,
							imageUrl: courseAtts.imageUrl
						}
					}
				}
			})
		}

		const handleCourseSelect = (selectedCourse) => {
			console.log(courseDetails[selectedCourse].imageUrl)
			if (selectedCourse in courseDetails) {
				setAttributes({
					selectedCourseId: parseInt(selectedCourse),
					selectedCourseTitle: courseDetails[selectedCourse].title,
					selectedCourseDesc: courseDetails[selectedCourse].description,
					selectedCourseImageID: courseDetails[selectedCourse].image,
					selectedCourseLink: courseDetails[selectedCourse].url,
					selectedCourseImageUrl: courseDetails[selectedCourse].imageUrl
				});
			} else {
				setAttributes({
					selectedCourseId: selectedCourse,
					selectedCourseTitle: '',
					selectedCourseDesc: '',
					selectedCourseImageID: '',
					selectedCourseLink: '',
					selectedCourseImageUrl: ''
				});
			}
		}

		return (
			<div className={className}>
				<h2>{__('Large Course Card')}</h2>
				{ isLoading && <span>{__('Loading...')}</span>}
				{ courseOptions &&
				<SelectControl
					label="Select course"
					value={ selectedCourseId }
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
