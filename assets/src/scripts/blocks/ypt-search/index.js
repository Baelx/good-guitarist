const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
import { BlockEdit } from './BlockEdit';

registerBlockType( 'gutenberg-good-guitarist/ypt-search', {
	title: 'Youtube Post Search Box',
	icon: 'search',
	category: 'layout',
	className: 'youtube-post-type-search',
	attributes: {},
	edit: BlockEdit,
	save: () => null
})