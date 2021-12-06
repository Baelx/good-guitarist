const { registerBlockType } = wp.blocks;
const { TextControl, PanelRow, SelectControl, ToggleControl } = wp.components;
const { RichText, useBlockProps } = wp.blockEditor;
const { PluginDocumentSettingPanel } = wp.editPost;
const { useSelect, dispatch, useDispatch } = wp.data;
const { useRef, useState } = wp.element;
const { __ } = wp.i18n;
const { parse } = wp.blockSerializationDefaultParser;
import _ from 'lodash';
import { youtubeAPIConfig } from '../../../../youtube-api-config'

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
		videoURL: {
			type: 'string',
		},
		videoID: {
			type: 'string',
		},
		songTitle: {
			type: 'string',
			default: ''
		},
		sidebarCourseSlotOne: {
			type: 'integer',
			default: 0
		},
		sidebarCourseSlotTwo: {
			type: 'integer',
			default: 0
		},
		postBodyCourses: {
			type: 'array',
			default: []
		},
		courseSlotFour: {
			type: 'integer',
			default: 0
		},
	},

	edit({ attributes, className, setAttributes }) {
		const {
			videoInfoFetched,
			videoID,
			videoURL,
			videoTitle,
			videoDescription,
			videoThumbnail,
			songTitle,
			sidebarCourseSlotOne,
			sidebarCourseSlotTwo,
			postBodyCourses
		} = attributes;

		const blockProps = useBlockProps();
		const courseOptions = [{
			label: 'None',
			value: null
		}];
		const postBody = useRef();

		const [fetchStatus, setFetchStatus] = useState({
			class: 'fetch-message-hidden',
			message: ''
		});
		const { postMeta, courseDetails } = useSelect( ( select ) => {
			const courses = select( 'core' ).getEntityRecords( 'postType', 'course' );
			const courseDetails = {};
			if (courses) {
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

			return {
				postMeta: select( 'core/editor' ).getEditedPostAttribute( 'meta' ),
				courseDetails: courseDetails,
			};
		} );
		const { editPost } = useDispatch( 'core/editor', [ postMeta.difficulty ] );

		/**
		 * Check if string has http:// or https:// in it.
		 *
		 * @param {String} stringToCheck
		 */
		const stringContainsLink = (stringToCheck) => {
			let containsLink = false;
			if ( stringToCheck.search(/(http:\/\/|https:\/\/).*/g) >= 0 ) {
				containsLink = true;
			}
			return containsLink;
		}

		/**
		 * Get all post body course area elements from a given dom Ref(useRef).
		 *
		 * @param {*} domRef
		 */
		const getCourseAreaElements = (domRef) => {
			return domRef.current.querySelectorAll('.post-body-course-area');
		}

		/**
		 * Parse the youtube video ID from the URL.
		 * Set the video URL and ID attributes.
		 *
		 * @param {*} event
		 */
		const handleURLChange = (event) => {
			let url = event.target.value;
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

		/**
		 * Update fetch completion message state and make message visible to user.
		 *
		 * @param {Boolean} completedSuccessfully
		 * @param {String} errorMessage
		 */
		const showFetchCompleteMessage = ( completedSuccessfully, errorMessage = '' ) => {
			let fetchMessageClass = '';
			let fetchMessageText = '';
			if ( completedSuccessfully ) {
				fetchMessageClass = 'fetch-message-success';
				fetchMessageText = __('Video information fetched successfully.');
			} else {
				fetchMessageClass = 'fetch-message-fail';
				fetchMessageText = __('Couldn\'t fetch video information.') + ` ${errorMessage}`;
			}
			setFetchStatus({
				class: fetchMessageClass,
				message: fetchMessageText
			});
			setTimeout(() => {
				setFetchStatus({
					class: 'fetch-message-hidden',
					message: ''
				})
			}, 3000);
		}

		/**
		 * Handle a successful youtube video fetch.
		 *
		 * @param {Object} response
		 */
		const handleFetchResponse = (response) => {
			try {
				let detectedPostBodyCourseAreas = 0;
				const fetchedTitle = response.result.items[0].snippet.title;
				const fetchedDescription = response.result.items[0].snippet.description;
				const fetchedThumbnail = response.result.items[0].snippet.thumbnails.medium.url;
				const descriptionArray = fetchedDescription.split('\n');
				descriptionArray.forEach((sentence) => {
					/**
					 * If a link is found in the sentence, increment the
					 * amount of post body course areas.
					 */
					if ( stringContainsLink(sentence) ) {
						detectedPostBodyCourseAreas++;
					}
				})
				/**
				 * Set post body array attribute to be an array of detectedPostBodyCourseAreas length,
				 * with each element being 0 to start(empty course selection).
				 */
				setAttributes({ postBodyCourses: Array(detectedPostBodyCourseAreas).fill(0) });

				// Update the post title.
				dispatch('core/editor').editPost({
					title: fetchedTitle,
				});

				// Set attributes from fetched video info.
				setAttributes({
					videoTitle: fetchedTitle,
					videoDescription: descriptionArray,
					videoThumbnail: fetchedThumbnail
				})

				// Todo: convert to useState()
				setAttributes({ videoInfoFetched: true });

				// Give some feedback to the user that the fetch has completed.
				showFetchCompleteMessage( true );
			} catch {
				// Let the user know the operation failed.
				showFetchCompleteMessage( false );
			}
		}

		/**
		 * Interface with the google client API to perform a fetch request
		 * to get information from the youtube video ID.
		 *
		 * @link https://github.com/google/google-api-javascript-client/blob/master/docs/reference.md
		 *
		 * @param {MouseEvent} event
		 * @param {String} videoID
		 */
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
					})
					.then(response => {
						handleFetchResponse(response);
					}, error => {
						// Let the user know the fetch failed.
						showFetchCompleteMessage( false, error );
					});
				})
			})
		}

		const handlePostBodyCourseChange = (newCourse, courseAreaAttributeToUpdate) => {
			const courseAreaElements = getCourseAreaElements(postBody);
			/**
			 * If the course area select box has a matching element in the post body,
			 * update the corresponding position in the array attribute and update the
			 * course area HTML.
			 */
			if (courseAreaElements[courseAreaAttributeToUpdate]) {
				const newPostBodyCourses = postBodyCourses.fill(newCourse, courseAreaAttributeToUpdate, courseAreaAttributeToUpdate + 1);
				setAttributes({ postBodyCourses: newPostBodyCourses });
				courseAreaElements.forEach(courseArea => console.log('sus', courseArea.dataset.courseSlot));

				// courseAreaElements[courseAreaAttributeToUpdate].classList.remove('no-course');
			}
		}

		const handleCourseChange = (newValue, id) => {
			if ('first-course-slot' === id) {
				console.log('it is set', newValue)
				if ('None' !== newValue ) {
					setAttributes({ sidebarCourseSlotOne: newValue })
				} else {
					setAttributes({ sidebarCourseSlotOne: 0})
				}
			}
			if ('second-course-slot' === id) {
				if ('None' !== newValue ) {
					setAttributes({ sidebarCourseSlotTwo: newValue })
				} else {
					setAttributes({ sidebarCourseSlotTwo: 0})
				}
			}
		}

		const SidebarCourseArea = (props) => {
			console.log(props.courseID)
			if ('None' !== props.courseID ) {
				const course = courseDetails[props.courseID];
				return (
					<div className="sidebar-course-card">
						<img src={course.imageUrl} alt="" />
						<div className="course-card-body">
							<p className="body-text">{course.description}</p>
							<a className="course-url-button" href={course.courseUrl}>{'Get it now!'}</a>
						</div>
					</div>
				)
			}
		}

		const EmptyCourseArea = (props) => {
			return (
				<div data-course-slot={props.courseSlot} className="post-body-course-area no-course">
					{<p>{ __('Select a course to fill this area or leave blank.')}</p>}
				</div>
			)
		}

		const PostBodyCourseArea = () => {
			return (<>
				<img src={''} alt="" />
				<div className="course-card-body">
					<p className="body-text">{''}</p>
					<a className="course-url-button" href={''}>{'Get it now!'}</a>
				</div>
			</>)
		}

		/**
		 * If the sentence contains a link, replace it with a course area.
		 * Else, output the sentence in a richtext component.
		 *
		 * @param {String} sentence
		 * @returns	{React.Component}
		 */
		const RichTextOrCourse = (sentence, index) => {
			return stringContainsLink(sentence) ?
				<EmptyCourseArea courseSlot={index} /> :
				<RichText key="" value={sentence} />
		}

		return (
			<div { ...blockProps } className={ className }>
				<PluginDocumentSettingPanel
					name="sidebar-course-slots"
					title={__("Video sidebar course slots")}
					className="sidebar-course-slots-panel"
				>
					{ courseDetails && <PanelRow>
						<SelectControl
							id="first-course-slot"
							label={__('Sidebar course 1')}
							value={sidebarCourseSlotOne}
							options={courseOptions}
							onChange={ (newValue) => handleCourseChange(newValue, 'first-course-slot') }
						/>
					</PanelRow> }
					{ courseDetails && <PanelRow>
						<SelectControl
							id="second-course-slot"
							label={__('Sidebar course 2')}
							value={sidebarCourseSlotTwo}
							options={courseOptions}
							onChange={ (newValue) => handleCourseChange(newValue, 'second-course-slot') }
						/>
					</PanelRow> }
				</PluginDocumentSettingPanel>
				<PluginDocumentSettingPanel
					name="post-body-course-slots"
					title={__('Post body course slots')}
					className="post-body-course-slots-panel"
				>
					{ postBodyCourses && postBodyCourses.map((course, index) => (
						<PanelRow>
							<SelectControl
								id={`body-course-slot-select-${index + 1}`}
								label={__('Course slot') + ` ${index + 1}`}
								value={postBodyCourses[index]}
								options={courseOptions}
								onChange={ (newValue) => handlePostBodyCourseChange(newValue, index) }
							/>
						</PanelRow>
					))}
				</PluginDocumentSettingPanel>
				<PluginDocumentSettingPanel
					name="song-difficulty-attributes"
					title={__('Song difficulty')}
					className="song-difficulty-panel"
				>
					<PanelRow>
						<TextControl
							label={__('Enter a number from 1 to 50')}
							value={ postMeta.song_difficulty }
							onChange={ (newValue) => editPost({meta: { song_difficulty: newValue }}) }
						/>
					</PanelRow>
				</PluginDocumentSettingPanel>
				<PluginDocumentSettingPanel
					name="contains-only-one-barre-chord"
					title={__('Contains only one barre chord')}
					className="contains-only-one-barre-chord-panel"
				>
					<PanelRow>
						<ToggleControl
							label={__('One barre chord song')}
							checked={ postMeta.contains_one_barre }
							onChange={ (newValue) => editPost({meta: { contains_one_barre: newValue }}) }
						/>
					</PanelRow>
				</PluginDocumentSettingPanel>
				<section className="video-details">
					<h2>{__('Video Details')}</h2>
					<span className={`fetch-message ${fetchStatus.class}`}>{fetchStatus.message}</span>
					<label className="youtube-post-label" htmlFor="youtube-video-url">Search by Youtube video URL</label>
					<form onSubmit={(event) => initFetch(event, videoID)}>
						<input
							id="youtube-video-url"
							label={__('Video URL')}
							className="youtube-video-url"
							value={ videoURL }
							onChange={handleURLChange}
						/>
						<input type="submit" className="yt-submit-button" value="Submit" />
					</form>
					{ videoTitle && <TextControl label={__('Video Title')} value={videoTitle} onChange={(e) => setAttributes({videoTitle: e.target.value})} />}
					{ ( videoThumbnail && videoInfoFetched ) &&
						<>
							<label className="youtube-post-label">{__('Video Thumbnail')}</label>
							<img src={videoThumbnail} />
						</>
					}
					<label className="youtube-post-label" htmlFor="song-title">{__('Song Title')}</label>
					<input id="song-title" type="text" value={songTitle} onChange={(e) => setAttributes({songTitle: e.target.value})} />
				</section>
				<section ref={postBody} className="post-body">
					<h2>{__('Post Body')}</h2>
					{ videoID ? <>
						<div className="youtube-post-video-area">
							{ ( videoURL ) && <iframe width="560" height="715" src={videoURL} className={0 !== sidebarCourseSlotOne ? 'iframe-two-third-width' : 'iframe-full-width'} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> }
							{ ( 0 !== sidebarCourseSlotOne ) && <div className="course-sidebar">
								{ 0 !== sidebarCourseSlotOne && <SidebarCourseArea courseID={sidebarCourseSlotOne} />}
								{ 0 !== sidebarCourseSlotTwo && <SidebarCourseArea courseID={sidebarCourseSlotTwo} />}
							</div> }
						</div>
						<div className="post-content-video-description">
							{ videoDescription && videoDescription.map((sentence, index) => RichTextOrCourse(sentence, index)) }
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
