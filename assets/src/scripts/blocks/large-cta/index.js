import { BlockEdit } from "./BlockEdit";
const { registerBlockType } = wp.blocks;

registerBlockType( 'gutenberg-good-guitarist/large-cta', {
	title: 'Large Call to Action',
	icon: 'megaphone',
	category: 'layout',
	className: 'large-cta',
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
	edit: BlockEdit,
	save: () => null
});