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
const { IconButton, RangeControl, PanelBody } = wp.components;

registerBlockType( 'gutenberg-good-guitarist/small-course-card', {
	title: 'Small Course Card',
	icon: 'format-image',
	category: 'layout',
	className: 'small-course-card',

	attributes: {
	},
	edit() {
		return (
			<div className="">
				<img src="" alt="" />
				<h3></h3>
				<button></button>
 			</div>
		)

	},
	save() {
		return (
			<div className="">
				<img src="" alt="" />
				<h3></h3>
				<button></button>
			</div>
		)
	}

});
