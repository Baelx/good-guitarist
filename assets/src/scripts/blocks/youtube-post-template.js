const { registerBlockType } = wp.blocks;
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
	RichText,
	InspectorControls,
	InnerBlocks,
	URLInput,
	URLInputButton,
	useBlockProps
} = wp.blockEditor;
// import { useEntityProp } from '@wordpress/core-data';
const { useSelect, dispatch } = wp.data;
const { useEntityProp } = wp.coreData;
const { __ } = wp.i18n;
import { stringify } from 'postcss';
import { youtubeAPIConfig } from '../../../../youtube-api-config'
import ebook1 from '../../../dist/images/ebook-1.png'
import ebook2 from '../../../dist/images/ebook-2.png'
import defaultPreviewImage from '../../../dist/images/good-guitarist-preview-img.png'

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
		videoThumbnail: {
			type: 'string',
			default: defaultPreviewImage
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
		},
		testBoolean:  {
			type: 'boolean',
			default: false
		}
	},

	edit({ attributes, className, setAttributes }) {
		const {
			videoID,
			videoURL,
			videoTitle,
			videoDescription,
			videoThumbnail,
			showPatreonLink,
			showEBookLink,
			courseSlotOne,
			courseSlotTwo
		} = attributes;
		// const blockProps = useBlockProps();

        const postType = useSelect(
            ( select ) => select( 'core/editor' ).getCurrentPostType(),
            []
        );
        const [ meta, setMeta ] = useEntityProp( 'postType', postType, 'meta' );

		const songDifficulty = meta[ 'song_difficulty' ];
        function updateSongDifficulty( newValue ) {
            setMeta( { ...meta, song_difficulty: newValue } );
        }

		const containsOneBarre = meta[ 'contains_one_barre' ];
        function updateContainsOneBarre( newValue ) {
            setMeta( { ...meta, contains_one_barre: newValue } );
        }

		console.log('the meta', meta)

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
						const fetchedTitle = response.result.items[0].snippet.title;
						const fetchedDescription = response.result.items[0].snippet.description;
						const fetchedThumbnail = response.result.items[0].snippet.thumbnails.medium.url;
						const descriptitonWithAnchorTags = fetchedDescription.replace(/(http:\/\/|https:\/\/).*/g, (text) => (`<a href="${text}">${text}</a>`));

						// Update the post title.
						dispatch('core/editor').editPost({title: fetchedTitle})
						setAttributes({
							videoTitle: fetchedTitle,
							videoDescription: descriptitonWithAnchorTags,
							videoThumbnail: fetchedThumbnail
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
					<PanelBody title="Song Difficulty">
						<PanelRow>
							<TextControl
								label="Enter a number from 1 to 50"
								value={ songDifficulty }
								onChange={ updateSongDifficulty }
							/>
						</PanelRow>
					</PanelBody>
					<PanelBody title="Contains only one barre chord">
						<PanelRow>
							<ToggleControl
								// id="show-patreon-form-toggle"
								label='One barre chord song'
								checked={ containsOneBarre }
								onChange={ updateContainsOneBarre }
							/>
						</PanelRow>
					</PanelBody>
				</InspectorControls>
				<form>
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
						}}
						/>
					<Button isSecondary onClick={() => initFetch(videoID)}>Populate Post</Button>
				</form>
				{/* <TextControl label="Video Title" value={videoTitle} /> */}
				<label className="youtube-post-label">{ __('Post Thumbnail') }</label>
				{ videoThumbnail && <img src={videoThumbnail} />}
				<div className="youtube-post-video-area">
					{ ( videoURL && videoInfoFetched ) && <iframe width="560" height="515" src={videoURL} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> }
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
