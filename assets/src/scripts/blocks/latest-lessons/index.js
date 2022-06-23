const { registerBlockType } = wp.blocks;
import { BlockEdit } from './BlockEdit';

registerBlockType( 'gutenberg-good-guitarist/latest-lessons', {
	title: 'Latest Lessons',
	icon: 'list',
	category: 'layout',
	className: 'latest-lessons',
	attributes: {
		lessons: {
			type: 'string',
		}
	},
	edit: BlockEdit,
	save: () => null
})