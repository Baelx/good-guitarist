const { registerBlockType } = wp.blocks;
const {
	RichText,

} = wp.editor;
const { TextControl,
		TextareaControl,
		Button,
		FocusableIframe
} = wp.components;
// const { withState } = wp.compose;
const {
	InnerBlocks,
	URLInput,
	URLInputButton
} = wp.blockEditor;
import { youtubeAPIConfig } from '../../../../youtube-api-config'

registerBlockType( 'gutenberg-good-guitarist/ypt', {
	title: 'Youtube Post Template',
	icon: 'playlist-video',
	category: 'layout',
	className: 'youtube-post-type',
	attributes: {
		videoDescription: {
			type: 'string',
		},
		videoURL: {
			type: 'string',
		},
		videoID: {
			type: 'string',
		}
	},


	edit({ attributes, className, setAttributes }) {
		const {
			videoID,
			videoURL,
			videoDescription,
		} = attributes;

		const initFetch = (videoID) => {
			gapi.load('client', () => {
				console.log('the vid id', videoID)
				gapi.client.setApiKey(youtubeAPIConfig.key);
				gapi.client.load('youtube', 'v3', () => {
					gapi.client.youtube.videos.list({
						part: 'snippet',
						id : videoID
					}).execute((response) => {
						let fetchedDescription = response.result.items[0].snippet.description;

						setAttributes({videoDescription: fetchedDescription})
						console.log(response.result)
					});
				});
			})
		}

		return (
			<div className={ className }>
				<URLInput
					value={ videoURL }
					className={`youtube-video-url`}
					onChange={(url) => {
						let parsedVideoID = null;
						let videoIDMatch = url.match(/(\?v=)(\w|-)+/g);
						if (videoIDMatch) {
							parsedVideoID = videoIDMatch[0].replace('?v=', '');
						}
						setAttributes({
							videoID: parsedVideoID,
							videoURL: url
						})
						console.log('video url', attributes)
					}}
				/>
				<Button isSecondary onClick={() => initFetch(videoID)}>Fetch Video Description</Button>
				{ videoURL ? <iframe width="560" height="515" src={videoURL} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> : ''}
				<TextareaControl
					label="Post content"
					class={`youtube-post-type-video-description`}
					value={ videoDescription }
					onChange={ ( text ) => setAttributes( { videoDescription: text } ) }
    			/>

				{ }
			</div>
		);
	},

	save({ attributes, className }) {
		const {
			videoURL,
			videoDescription
		} = attributes;

		return (
			<div className={ className }>
				{ videoURL ? <iframe width="560" height="515" src={videoURL} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> : ''}
				<p class={`youtube-post-type-video-description`}>{videoDescription}</p>
			</div>
		);
	}
});
