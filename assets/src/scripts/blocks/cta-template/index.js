const { registerBlockType } = wp.blocks;
import { BlockEdit } from "./BlockEdit";

registerBlockType( 'gutenberg-good-guitarist/cta-template', {
    title: 'Call to Action Template',
    icon: 'admin-customizer',
    category: 'text',
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
			default: ''
		},
		imageId: {
			type: 'integer',
			default: 0
		},
		imageUrl: {
			type: 'string',
			default: ''
		}
	},
    edit: BlockEdit,
    save: () => null
});