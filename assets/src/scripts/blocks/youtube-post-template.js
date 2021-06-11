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
		videoTitle: {
			type: 'string'
		},
		videoDescription: {
			type: 'array',
			default: []
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
			videoTitle,
			videoDescription,
		} = attributes;

		let videoInfoFetched = false;

		const initFetch = (videoID) => {
			gapi.load('client', () => {
				console.log('the vid id', videoID)
				gapi.client.setApiKey(youtubeAPIConfig.key);
				gapi.client.load('youtube', 'v3', () => {
					gapi.client.youtube.videos.list({
						part: 'snippet',
						id : videoID
					}).execute((response) => {
						let fetchedTitle = response.result.items[0].snippet.title;
						let fetchedDescription = response.result.items[0].snippet.description;
						// let descriptitonWithoutCarriageReturns = fetchedDescription.replace('\r', '');
						// console.log(descriptitonWithoutCarriageReturns)
						let descriptitonWithAnchorTags = fetchedDescription.replace(/(http:\/\/|https:\/\/).*/g, (text) => (`<a href="${text}">${text}</a>`))
						// console.log(descriptitonWithAnchorTags)
						let descriptionArray = descriptitonWithAnchorTags.split("\n");
						// console.log(descriptionArray)
						setAttributes({
							videoTitle: fetchedTitle,
							videoDescription: descriptitonWithAnchorTags
						})
						videoInfoFetched = true;
					});
				});
			})
		}

		return (
			<div className={ className }>
				<URLInput
					label="Video URL"
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
				<Button isSecondary onClick={() => initFetch(videoID)}>Populate Post</Button>
				<TextControl label="Video Title" value={videoTitle} />
				{ videoURL ? <iframe width="560" height="515" src={videoURL} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> : ''}
				<div class="post-content-video-description">
					{/* { videoDescription.map((paragraph) => <RichText value={paragraph} /> )} */}
					<RichText value={videoDescription} />
				</div>
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
				<div class="post-content-video-description">
					{/* { videoDescription.map((paragraph) => <RichText.Content value={paragraph} />)} */}
					<RichText.Content value={videoDescription} />
				</div>
			</div>
		);
	}
});
