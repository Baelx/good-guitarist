const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType( 'gutenberg-good-guitarist/ypt-search', {
	title: 'Youtube Post Search Box',
	icon: 'search',
	category: 'layout',
	className: 'youtube-post-type-search',
	attributes: {},
	edit: () => (
		<>
			<div>{__('A full page song search area will be rendered here.')}</div>
			<small>{__("It's recommended that you only place one of these on your site on a page called 'Search'")}</small>
		</>
	),
	save: () => null
})
