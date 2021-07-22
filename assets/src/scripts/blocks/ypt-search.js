const { registerBlockType } = wp.blocks;
const {
	RichText,
	InspectorControls
} = wp.editor;
const {
	TextControl,
	TextareaControl,
	Button,
	FocusableIframe,
	PanelBody,
	PanelRow,
	FormToggle,
	SelectControl,
	ToggleControl
} = wp.components;
const {
	InnerBlocks,
	URLInput,
	URLInputButton,
} = wp.blockEditor;
import { youtubeAPIConfig } from '../../../../youtube-api-config'
import ebook1 from '../../../dist/images/ebook-1.png'
import ebook2 from '../../../dist/images/ebook-2.png'

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
