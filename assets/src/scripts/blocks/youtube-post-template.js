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
	URLInput,
	useBlockProps
} = wp.blockEditor;
const { useSelect, useEffect, dispatch, useDispatch } = wp.data;
const { useEntityProp } = wp.coreData;
const { useState } = wp.element;
const { __ } = wp.i18n;
import { youtubeAPIConfig } from '../../../../youtube-api-config'

registerBlockType( 'gutenberg-good-guitarist/ypt', {
	apiVersion: 2,
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
			default: gutenbergVars.image_dir + '/good-guitarist-preview-img.png'
		},
		videoURL: {
			type: 'string',
		},
		videoID: {
			type: 'string',
		},
		courseSlotOne: {
			type: 'integer'
		},
		courseSlotTwo: {
			type: 'integer'
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
			courseSlotOne,
			courseSlotTwo
		} = attributes;
		const blockProps = useBlockProps();

		const courseOptions = [{
			label: 'None',
			value: null
		}];

		const [fetchStatus, setFetchStatus] = useState({
			class: 'fetch-message-hidden',
			message: ''
		});

		const { postMeta, courses } = useSelect( ( select ) => {
			return {
				postMeta: select( 'core/editor' ).getEditedPostAttribute( 'meta' ),
				courses: select( 'core' ).getEntityRecords( 'postType', 'course' ),
			};
		} );
		const { editPost } = useDispatch( 'core/editor', [ postMeta.difficulty ] );

		if ( courses ) {
			courses.forEach((course) => {
				courseOptions.push({
					label: course.title.raw,
					value: parseInt(course.id),
					// imageURL:
				})
			})
		}

		let videoInfoFetched = false;

		const handleURLChange = (url) => {
			let parsedVideoID = null;
			let videoIDMatch = url.match(/(\?v=)(\w|-)+/g);
			if (videoIDMatch) {
				parsedVideoID = videoIDMatch[0].replace('?v=', '');
			}
			setAttributes({
				videoID: parsedVideoID,
				videoURL: url
			})
		}

		const initFetch = (event, videoID) => {
			event.preventDefault();
			setFetchStatus({
				class: 'fetch-message-hidden',
				message: ''
			});
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
						setFetchStatus({
							class: 'fetch-message-success',
							message: 'Video information fetched successfully.'
						});
						setTimeout(() => {
							setFetchStatus({
								class: 'fetch-message-hidden',
								message: ''
							})
						}, 3000)
					})
				})
			})
		}

		const handleCourseChange = (newValue, id) => {
			if ('first-course-slot' === id) {
				setAttributes({ courseSlotOne: newValue })
			}
			if ('second-course-slot' === id) {
				setAttributes({ courseSlotTwo: newValue })
			}
		}

		const CourseArea = ( props ) => {
			const filteredCourses = courses.filter(course => course.id === parseInt(props.courseID));
			const selectedCourse = filteredCourses[0];

			return (
				<div className="small-course-card">
					{/* <img src={ebook1} alt="" /> */}
					<h3>{props.slotContent}</h3>
					<button></button>
				</div>
			)
		}
		return (
			<div { ...blockProps } className={ className }>
				<InspectorControls>
					<PanelBody title={__('Courses and Links')}>
						{ courses && <PanelRow>
							<SelectControl
								id="first-course-slot"
								label={__('First course slot')}
								value={courseSlotOne}
								options={courseOptions}
								onChange={ (newValue) => handleCourseChange(newValue, 'first-course-slot') }
							/>
						</PanelRow> }
						{ courses && <PanelRow>
							<SelectControl
								id="second-course-slot"
								label={__('Second course slot')}
								value={courseSlotTwo}
								options={courseOptions}
								onChange={ (newValue) => handleCourseChange(newValue, 'second-course-slot') }
							/>
						</PanelRow> }
					</PanelBody>
					<PanelBody title={__('Song Difficulty')}>
						<PanelRow>
							<TextControl
								label={__('Enter a number from 1 to 50')}
								value={ postMeta.song_difficulty }
								onChange={ (newValue) => editPost({meta: { song_difficulty: newValue }}) }
							/>
						</PanelRow>
					</PanelBody>
					<PanelBody title={__('Contains only one barre chord')}>
						<PanelRow>
							<ToggleControl
								label={__('One barre chord song')}
								checked={ postMeta.contains_one_barre }
								onChange={ (newValue) => editPost({meta: { contains_one_barre: newValue }}) }
							/>
						</PanelRow>
					</PanelBody>
				</InspectorControls>
				<span className={`fetch-message ${fetchStatus.class}`}>{fetchStatus.message}</span>
				<form onSubmit={(event) => initFetch(event, videoID)}>
					<URLInput
						label={__('Video URL')}
						value={ videoURL }
						className={`youtube-video-url`}
						onChange={handleURLChange}
						/>
                	<input type="submit" value="Submit" />
				</form>
				{ videoTitle && <TextControl label={__('Video Title')} value={videoTitle} />}
				{ videoThumbnail &&
					<>
						<label className="youtube-post-label">{__('Post Thumbnail')}</label>
						<img src={videoThumbnail} />
					</>
				}
				<div className="youtube-post-video-area">
					{ ( videoURL ) && <iframe width="560" height="515" src={videoURL} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> }
					{ ( courseSlotOne || courseSlotTwo ) && <div className="course-sidebar">
						{ courseSlotOne && <CourseArea courseID={courseSlotOne} />}
						{ courseSlotTwo && <CourseArea courseID={courseSlotTwo} />}
					</div> }
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
