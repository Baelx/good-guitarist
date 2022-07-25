const { registerBlockType } = wp.blocks;
import { BlockEdit } from "./BlockEdit";
import { BlockSave } from "./BlockSave";

registerBlockType( 'gutenberg-good-guitarist/chord-diagram', {
    title: 'Chord Diagram',
    icon: 'playlist-audio',
    category: 'text',
	attributes: {
		chords: {
			type: 'array',
			default: []
		}
	},
    edit: BlockEdit,
    save: BlockSave
});