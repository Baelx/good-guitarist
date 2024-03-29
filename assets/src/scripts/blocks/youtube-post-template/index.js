const { registerBlockType } = wp.blocks;
import { BlockEdit } from './BlockEdit';
import { BlockSave } from './BlockSave';
import { v1 } from './deprecated/v1';

registerBlockType( 'gutenberg-good-guitarist/ypt', {
	apiVersion: 2,
	title: 'Youtube Post Template',
	icon: 'playlist-video',
	category: 'layout',
	className: 'youtube-post-type',
	attributes: {
		videoInfoFetched: {
			type: 'boolean',
			default: false
		},
		videoTitle: {
			type: 'string'
		},
		videoThumbnail: {
			type: 'string',
			default: gutenbergVars.image_dir + '/good-guitarist-preview-img.png'
		},
		videoDescription: {
			type: 'array',
		},
		videoID: {
			type: 'string',
		},
        videoUrlRaw: {
            type: 'string',
            default: ''
        },
        videoUrlEmbed: {
            type: 'string',
            default: ''
        },
		songTitle: {
			type: 'string',
			default: ''
		},
		sidebarCtaSlotOne: {
			type: 'object',
			default: {},
		},
		sidebarCtaSlotTwo: {
			type: 'object',
			default: {}
		},
		postBodyElements: {
			type: 'array',
			default: []
		},
		songChordsAttribute: {
			type: 'array',
			default: []
		},
		songDifficultyAttribute: {
			type: 'string',
			default: ''
		}
	},
	deprecated: [
		v1,
	],
	edit: BlockEdit,
	save: BlockSave
});