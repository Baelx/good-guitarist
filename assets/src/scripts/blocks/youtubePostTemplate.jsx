import { getCtaDataFromPosts } from '../utils';
import { SidebarCta } from '../components/SidebarCta';
const { registerBlockType, createBlock } = wp.blocks;
const { TextControl, PanelRow, SelectControl, ToggleControl } = wp.components;
const { useBlockProps, InnerBlocks } = wp.blockEditor;
const { PluginDocumentSettingPanel } = wp.editPost;
const { select, useSelect, dispatch, useDispatch } = wp.data;
const { useRef, useState, useEffect } = wp.element;
const { __ } = wp.i18n;

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
		sidebarCtaSlotOne: {
			type: 'integer',
			default: -1
		},
		sidebarCtaSlotTwo: {
			type: 'integer',
			default: -1
		},
		postBodyElements: {
			type: 'array',
			default: []
		}
	},

	edit({ clientId, attributes, className, setAttributes }) {
		const {
			videoInfoFetched,
			videoID,
			videoURL,
			videoTitle,
			videoThumbnail,
			songTitle,
			sidebarCtaSlotOne,
			sidebarCtaSlotTwo
		} = attributes;

		const blockProps = useBlockProps();
		const postBody = useRef();
		const [errorMessage, setErrorMessage] = useState({
			class: 'fetch-message-hidden',
			message: ''
		});

		useEffect(() => {
			if (!gutenbergVars.youtube_api_key) {
				setErrorMessage({
					class: 'fetch-message-fail',
					message: __('Youtube API key not detected. Please ensure you have entered a valid API key in the "GG Settings" section.')
				});
			}
		}, []);

		const { postMeta, ctaData, ctaSelectOptions } = useSelect( ( select ) => {
			const ctaPosts = select( 'core' ).getEntityRecords( 'postType', 'cta' );
			let ctaData;
			let ctaSelectOptions = [{
				label: 'None',
				value: -1
			}];
			if (ctaPosts) {
				ctaData = getCtaDataFromPosts(ctaPosts);
				// Create dropdown options.
				ctaData.forEach((cta) => {
					ctaSelectOptions.push({
						label: cta.title,
						value: cta.id,
					});
				});
			}

			return {
				postMeta: select( 'core/editor' ).getEditedPostAttribute( 'meta' ),
				ctaData: ctaData,
				ctaSelectOptions: ctaSelectOptions,
			};
		} );

		if (postMeta) {
			const { editPost } = useDispatch( 'core/editor', [ postMeta.difficulty ] );
		}

		/**
		 * Check if string has http:// or https:// in it.
		 *
		 * @param {string} stringToCheck
		 */
		const stringContainsLink = (stringToCheck) => {
			const linkRegex = /(http:\/\/|https:\/\/).*/g;
			let matchedLink = '';
			if ( 'string' === typeof stringToCheck && stringToCheck?.search(linkRegex) >= 0 ) {
				matchedLink = stringToCheck.match(linkRegex);
			}
			return matchedLink;
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
			setErrorMessage({
				class: fetchMessageClass,
				message: fetchMessageText
			});
			setTimeout(() => {
				setErrorMessage({
					class: 'fetch-message-hidden',
					message: ''
				})
			}, 3000);
		}

		/**
		 * Create a gutenberg block for each paragraph of the fetched
		 * youtube description.
		 *
		 * @param {array} descriptionArray
		 * @returns
		 */
		const createBlocksFromDescription = (descriptionArray) => {
			const descriptionWithoutEmpties = descriptionArray.filter(description => description.length);
			return descriptionWithoutEmpties.map(description => {
				let matchedLink = stringContainsLink(description);
				let blockType = 'core/paragraph';
				let blockAtts = { content: description };
				if (matchedLink) {
					blockType = 'gutenberg-good-guitarist/small-cta';
					blockAtts = { url: matchedLink, description: description }
				}
				return createBlock(blockType, blockAtts);
			});
		}

		/**
		 * Handle a successful youtube video fetch.
		 *
		 * @param {Object} response
		 */
		const handleFetchResponse = (response) => {
			try {
				// Remove old innerBlocks in post body.
				const currentBlock = select( 'core/block-editor' ).getBlocksByClientId( clientId )[ 0 ];
				const childBlocks = currentBlock.innerBlocks;
				const childBlockIds = childBlocks.map( block => block.clientId );
				dispatch( 'core/block-editor' ).removeBlocks( childBlockIds );

				const fetchedTitle = response.result.items[0].snippet.title;
				const fetchedDescription = response.result.items[0].snippet.description;
				const fetchedThumbnail = response.result.items[0].snippet.thumbnails.medium.url;
				const descriptionArray = fetchedDescription.split('\n');
				const postBodyBlocks = createBlocksFromDescription(descriptionArray);

				// Update the post title.
				dispatch('core/editor').editPost({ title: fetchedTitle });

				// Update innerBlocks in post body.
				dispatch('core/block-editor').insertBlocks(postBodyBlocks, 0, clientId);

				// Set attributes from fetched video info.
				setAttributes({
					videoTitle: fetchedTitle,
					videoThumbnail: fetchedThumbnail,
					videoInfoFetched: true
				});

				// Give some feedback to the user that the fetch has completed.
				showFetchCompleteMessage( true );
			} catch (error) {
				// Let the user know the operation failed.
				showFetchCompleteMessage( false );
				console.error(error);
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
			setErrorMessage({
				class: 'fetch-message-hidden',
				message: ''
			});
			gapi.load('client', () => {
				console.log('the vid id', videoID)
				gapi.client.setApiKey(gutenbergVars.youtube_api_key);
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

		return (
			<div { ...blockProps } className={ className }>
				<PluginDocumentSettingPanel
					name="sidebar-course-slots"
					title={__("Video sidebar CTA slots")}
					className="sidebar-course-slots-panel"
				>
					{ctaSelectOptions && <PanelRow>
						 <SelectControl
							label={__('Sidebar CTA slot 1')}
							value={sidebarCtaSlotOne}
							options={ctaSelectOptions}
							onChange={(newValue) => setAttributes({ sidebarCtaSlotOne: Number(newValue) })}
						/>
					</PanelRow>}
					{ctaSelectOptions && <PanelRow>
						 <SelectControl
							label={__('Sidebar CTA slot 2')}
							value={sidebarCtaSlotTwo}
							options={ctaSelectOptions}
							onChange={(newValue) => setAttributes({ sidebarCtaSlotTwo: Number(newValue) })}
						/>
					</PanelRow>}
				</PluginDocumentSettingPanel>
				<PluginDocumentSettingPanel
					name="song-difficulty-attributes"
					title={__('Song difficulty')}
					className="song-difficulty-panel"
				>
					<PanelRow>
						{postMeta && <TextControl
							label={__('Enter a number from 1 to 50')}
							value={ postMeta.song_difficulty }
							onChange={ (newValue) => editPost({meta: { song_difficulty: newValue }}) }
						/>}
					</PanelRow>
				</PluginDocumentSettingPanel>
				<PluginDocumentSettingPanel
					name="contains-only-one-barre-chord"
					title={__('Contains only one barre chord')}
					className="contains-only-one-barre-chord-panel"
				>
					<PanelRow>
						{postMeta && <ToggleControl
							label={__('One barre chord song')}
							checked={ postMeta.contains_one_barre }
							onChange={ (newValue) => editPost({meta: { contains_one_barre: newValue }}) }
						/>}
					</PanelRow>
				</PluginDocumentSettingPanel>
				<section className="video-details">
					<h2>{__('Video Details')}</h2>
					<span className={`fetch-message ${errorMessage.class}`}>{errorMessage.message}</span>
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
							{ videoURL && <iframe width="560"
													  height="715"
													  src={videoURL}
													  className={(sidebarCtaSlotOne > 0 || sidebarCtaSlotTwo > 0) ? 'iframe-two-third-width' : 'iframe-full-width'}
													  title="YouTube video player"
													  frameborder="0"
													  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
													  allowfullscreen></iframe> }
							{ ( sidebarCtaSlotOne > 0 || sidebarCtaSlotTwo > 0 ) && <div className="course-sidebar">
								{ ( sidebarCtaSlotOne > 0 && ctaData ) && <SidebarCta ctaId={sidebarCtaSlotOne} ctaData={ctaData} />}
								{ ( sidebarCtaSlotTwo > 0 && ctaData ) && <SidebarCta ctaId={sidebarCtaSlotTwo} ctaData={ctaData} />}
							</div> }
						</div>
						<div className="post-content-video-description">
							<InnerBlocks />
						</div>
					</> : <span className="empty-post-body-msg">{__('Submit URL to populate post body.')}</span> }
				</section>
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
				<div class={`youtube-post-type-video-description`}>
					<InnerBlocks.Content />
				</div>
			</div>
		);
	}
});
