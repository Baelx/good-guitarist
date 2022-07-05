const { __ } = wp.i18n;
import { BlockEdit } from "./BlockEdit";
import { BlockSave } from "./BlockSave";
const { registerBlockType } = wp.blocks;

registerBlockType( 'gutenberg-good-guitarist/large-cta', {
	title: __('Large Call to Action'),
	icon: 'megaphone',
	category: 'layout',
	className: 'large-cta',
	attributes: {
		title: {
			type: 'string',
			default: ''
		},
		description: {
			type: 'string',
			default: ''
		},
		url: {
			type: 'string',
			default: ''
		},
		buttonText: {
			type: 'string',
			default: 'Click here'
		},
		imageId: {
			type: "number",
		},
		imageUrl: {
			type: "string",
			default: `${gutenbergVars.image_dir}/good-guitarist-preview-img.png`
		},
	},
	edit: BlockEdit,
	save: BlockSave
});