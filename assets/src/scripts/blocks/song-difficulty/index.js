const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
import { BlockEdit } from "./BlockEdit";
import { BlockSave } from "./BlockSave";

registerBlockType( 'gutenberg-good-guitarist/song-difficulty', {
    title: __('Song Difficulty'),
    icon: 'playlist-audio',
    category: 'text',
	// Only show this block in the youtube post template block.
	parent: [ "gutenberg-good-guitarist/ypt" ],
	attributes: {
		chords: {
			type: 'string',
			default: ''
		}
	},
    edit: BlockEdit,
    save: BlockSave
});