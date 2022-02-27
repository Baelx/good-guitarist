const { registerBlockType } = wp.blocks;

registerBlockType( 'gutenberg-good-guitarist/ypt-search', {
	title: 'Youtube Post Search Box',
	icon: 'search',
	category: 'layout',
	className: 'youtube-post-type-search',
	attributes: {},
	edit: () => (
		<div>This is the search box for looking at.</div>
	),
	save: () => null
})
