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
			type: 'string',
		},
		videoURL: {
			type: 'string',
		},
		videoID: {
			type: 'string',
		},
		showPatreonLink: {
			type: 'boolean'
		},
		showEBookLink: {
			type: 'boolean'
		},
		courseSlotOne: {
			type: 'string'
		},
		courseSlotTwo: {
			type: 'string'
		}
	},


	edit({ attributes, className, setAttributes }) {
		const {
			videoID,
			videoURL,
			videoTitle,
			videoDescription,
			showPatreonLink,
			showEBookLink,
			courseSlotOne,
			courseSlotTwo
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
						let descriptitonWithAnchorTags = fetchedDescription.replace(/(http:\/\/|https:\/\/).*/g, (text) => (`<a href="${text}">${text}</a>`))
						setAttributes({
							videoTitle: fetchedTitle,
							videoDescription: descriptitonWithAnchorTags
						})
						videoInfoFetched = true;
					});
				});
			})
		}

		const availableCourses = [
			{ label: 'Select a course', value: null, img: ebook1 },
			{ label: 'Beginner Course', value: 'beginner-course', img: ebook2 },
			{ label: 'Intermediate Course', value: 'intermediate-course', img: '' },
			{ label: 'Advanced Course', value: 'advanced-course', img: '' },
			{ label: 'Expert Course', value: 'expert-course', img: '' }
		];

		const CourseArea = ( props ) => {
			const selectedCourse = availableCourses.filter(item => item.value === props.slotContent);
			const imgSrc = selectedCourse.img;
			return (
				<div className="">
					<img src={ebook1} alt="" />
					<h3>{props.slotContent}</h3>
					<button></button>
				</div>
			)
		}
		return (
			<div className={ className }>
				<InspectorControls>
					<PanelBody title='Courses and Links'>
						<PanelRow>
							<ToggleControl
								id="show-patreon-form-toggle"
								label='Show Patreon Link'
								checked={ showPatreonLink }
								onChange={(newValue) => setAttributes({ showPatreonLink: newValue }) }
							/>
						</PanelRow>
						<PanelRow>
							<ToggleControl
								id="high-contrast-form-toggle"
								label='Show E-Book Link'
								checked={ showEBookLink }
								onChange={ (newValue) => setAttributes({ showEBookLink: newValue }) }
							/>
						</PanelRow>
						<PanelRow>
							<SelectControl
								label="Course Slot 1"
								value={ courseSlotOne }
								options={availableCourses}
								onChange={ (newValue) => setAttributes({ courseSlotOne: newValue }) }
							/>
						</PanelRow>
						<PanelRow>
							<SelectControl
								label="Course slot 2"
								value={courseSlotTwo}
								options={availableCourses}
								onChange={ (newValue) => setAttributes({ courseSlotTwo: newValue }) }
							/>
						</PanelRow>
					</PanelBody>
				</InspectorControls>
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
				<div className="youtube-post-video-area">
					{ videoURL ? <iframe width="560" height="515" src={videoURL} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> : null}
					{ courseSlotOne ? <CourseArea slotContent={courseSlotOne} /> : null }
					{ courseSlotTwo ? <CourseArea slotContent={courseSlotTwo} /> : null}
				</div>
				<div claclassNamess="post-content-video-description">
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
				<div className="post-content-video-description">
					<RichText.Content value={videoDescription} />
				</div>
			</div>
		);
	}
});
