const { registerBlockType } = wp.blocks;
const {
	TextControl,
	PanelBody,
	PanelRow,
	SelectControl,
	ToggleControl
} = wp.components;
const {
	RichText,
	InspectorControls,
	URLInput,
	useBlockProps
} = wp.blockEditor;
const { useSelect, dispatch, useDispatch } = wp.data;
const { useState } = wp.element;
const { __ } = wp.i18n;
const { parse } = wp.blockSerializationDefaultParser;
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
		videoThumbnail: {
			type: 'string',
			// default: gutenbergVars.image_dir + '/good-guitarist-preview-img.png'
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
		courseSlotOne: {
			type: 'integer',
			default: 0
		},
		courseSlotTwo: {
			type: 'integer',
			default: 0
		},
		courseSlotThree: {
			type: 'integer',
			default: 0
		},
		courseSlotFour: {
			type: 'integer',
			default: 0
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
		const courseDetails = {};
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
				const parsedBlocks = parse(course.content.raw);
				/**
				 * There may be multiple blocks in the course post.
				 *
				 * Find the course template block(which should be the first)
				 * and get its attributes.
				 */
				const courseTemplateBlock = parsedBlocks.find(block => 'gutenberg-good-guitarist/course-template' === block.blockName);
				const courseAtts = courseTemplateBlock.attrs;

				courseOptions.push({
					label: course.title.raw,
					value: parseInt(course.id),
				})
				// Keep separate courseDetail objects used to populate attributes.
				courseDetails[course.id] = {
					title: course.title.raw,
					description: courseAtts.courseDescription,
					url: courseAtts.courseUrl,
					imageId: courseAtts.imageId,
					imageUrl: courseAtts.imageUrl
				}
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
						console.log(descriptitonWithAnchorTags);
						// Update the post title.
						dispatch('core/editor').editPost({
							title: fetchedTitle,
						});
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
				console.log('it is set', newValue)
				if ('None' !== newValue ) {
					setAttributes({ courseSlotOne: newValue })
				} else {
					setAttributes({ courseSlotOne: 0})
				}
			}
			if ('second-course-slot' === id) {
				if ('None' !== newValue ) {
					setAttributes({ courseSlotTwo: newValue })
				} else {
					setAttributes({ courseSlotTwo: 0})
				}
			}
		}

		const CourseArea = ( props ) => {
			console.log(props.courseID)
			if ('None' !== props.courseID ) {
				const course = courseDetails[props.courseID];
				console.log('happening?')
				return (
					<div className="small-course-card">
						<img src={course.imageUrl} alt="" />
						<div className="course-card-body">
							<p className="body-text">{course.description}</p>
							<a className="course-url-button" href={course.courseUrl}>{'Get it now!'}</a>
						</div>
					</div>
				)
			}
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
				<section className="video-details">
					<h2>{__('Video Details')}</h2>
					<span className={`fetch-message ${fetchStatus.class}`}>{fetchStatus.message}</span>
					<form onSubmit={(event) => initFetch(event, videoID)}>
						<URLInput
							label={__('Video URL')}
							value={ videoURL }
							className={`youtube-video-url`}
							onChange={handleURLChange}
							/>
						<input type="submit" className="yt-submit-button" value="Submit" />
					</form>
					{ videoTitle && <TextControl label={__('Video Title')} value={videoTitle} onChange={(newValue) => setAttributes({videoTitle: newValue})} />}
					{ videoThumbnail &&
						<>
							<label className="youtube-post-label">{__('Video Thumbnail')}</label>
							<img src={videoThumbnail} />
						</>
					}
				</section>
				<section className="post-body">
					<h2>{__('Post Body')}</h2>
					{ videoID ?
					<>
						<div className="youtube-post-video-area">
							{ ( videoURL ) && <iframe width="560" height="715" src={videoURL} className={0 !== courseSlotOne ? 'iframe-two-third-width' : 'iframe-full-width'} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> }
							{ ( 0 !== courseSlotOne ) && <div className="course-sidebar">
								{ 0 !== courseSlotOne && <CourseArea courseID={courseSlotOne} />}
								{ 0 !== courseSlotTwo && <CourseArea courseID={courseSlotTwo} />}
							</div> }
						</div>
						<div classNames="post-content-video-description">
							<RichText value={videoDescription} />
						</div>
					</> : <span className="empty-post-body-msg">{__('Submit URL to populate post body.')}</span> }
				</section>
			</div>
		);
	},

	save() {
		return null;
	}
});
