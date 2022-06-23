const { registerBlockType } = wp.blocks;
import { BlockEdit } from './BlockEdit';
import { BlockSave } from './BlockSave';

registerBlockType( 'gutenberg-good-guitarist/small-cta', {
	title: 'Small Call to Action',
	icon: 'megaphone',
	category: 'layout',
	className: 'small-cta',
	attributes: {
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