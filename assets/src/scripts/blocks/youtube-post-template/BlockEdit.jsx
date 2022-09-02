import {
    getCtaDataFromPosts,
    createBlocksFromDescription
} from '../../utils';
import { SidebarCta } from '../../components/SidebarCta';
const { TextControl, PanelRow, SelectControl, ToggleControl, Spinner } = wp.components;
const { useBlockProps, InnerBlocks } = wp.blockEditor;
const { PluginDocumentSettingPanel } = wp.editPost;
const { select, useSelect, dispatch, subscribe } = wp.data;
const { useRef, useState, useEffect } = wp.element;
const { __ } = wp.i18n;
const { isSavingPost } = select( 'core/editor' );

/**
 * Edit component for Youtube Post Template.
 * 
 * Presents a UI that the user can use to pull Youtube Video Post data with.
 * Also presents a number of taxonomies and meta fields in the sidebar(chords, difficulty, etc.).
 * 
 * @param {object} props Gutenberg default props. 
 * @returns {JSX}
 */
export const BlockEdit = ({ clientId, attributes, className, setAttributes }) => {
    const {
        videoInfoFetched,
        videoID,
        videoUrlRaw,
        videoUrlEmbed,
        videoTitle,
        videoThumbnail,
        songTitle,
        sidebarCtaSlotOne,
        sidebarCtaSlotTwo
    } = attributes;

    const blockProps = useBlockProps();
    const postBody = useRef();
    const [isFetching, setIsFetching] = useState(false);
    const [isSavingProcess, setSavingProcess] = useState(false);
    const [errorMessage, setErrorMessage] = useState({
        class: 'fetch-message-hidden',
        message: ''
    });

    // Subscribe to the post save event and update a piece of state if it's currently saving.
    subscribe(() => {
        if (isSavingPost()) {
            setSavingProcess(true);
        } else {
            setSavingProcess(false);
        }
    });

    // On component render, if there is no youtube API key in the site settings, show the user an error.
    useEffect(() => {
        if (!gutenbergVars.youtube_api_key) {
            setErrorMessage({
                class: 'fetch-message-fail',
                message: __('Youtube API key not detected. Please ensure you have entered a valid API key in the "GG Settings" section.')
            });
        }
    }, []);

    // Get various data from the Wordpress store.
    const { postMeta, ctaData, ctaSelectOptions } = useSelect( ( select ) => {
        const ctaPosts = select( 'core' ).getEntityRecords( 'postType', 'cta', { per_page: -1 } );
        let ctaData;
        let ctaSelectOptions = [{
            label: 'None',
            value: -1
        }];

        // Extract data from all CTA posts to use in the sidebar slot dropdown menus.
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
            // Return the post's meta values. This comes in handy for displaying those values in the block.
            postMeta: select( 'core/editor' ).getEditedPostAttribute( 'meta' ),
            // Return the data from CTA posts.
            ctaData: ctaData,
            // Return the options used in the sidebar slot dropdowns.
            ctaSelectOptions: ctaSelectOptions,
        };
    } );

    /**
     * 
     * 
     * @param {array} selectedChords The selected chords of the post.
     * @return {void}
     */
    const updateSongChordsBlock = (selectedChords) => {
        const currentBlock = select( 'core/block-editor' ).getBlocksByClientId( clientId )[ 0 ];
        
        if (currentBlock && currentBlock.innerBlocks) {
            const songChordsBlocks = currentBlock.innerBlocks.filter(block => 'gutenberg-good-guitarist/song-chords' === block.name);
            const songChordsBlocksIds = songChordsBlocks.map(block => block.id);
            dispatch('core/block-editor').updateBlockAttributes(songChordsBlocksIds, {
                chords: selectedChords
            })
        }
    }

    const updateSongDifficultyBlock = () => {
        const postContent = select('core/editor').getEditedPostContent();
        const songDifficultyBlock = getBlockTypeFromPostContent(postContent, 'gutenberg-good-guitarist/song-difficulty');
    }
    

    // Watch for the song chords to change. If they do, update the post's chord list block(s).
    useSelect((select) => {
        let songChords = [];
        const chordIds = select('core/editor').getEditedPostAttribute('chords');
        const allChords = select('core').getEntityRecords('taxonomy', 'chords');
        if (Array.isArray(chordIds) && Array.isArray(allChords)) {
            const selectedChords = allChords.filter(chord => chordIds.includes(chord.id));
            songChords = selectedChords.map(chord => chord.name);
            console.log('the chords', selectedChords)
            updateSongChordsBlock(selectedChords);

        }
        // return songChords;
    });

    // Watch for the song difficulty to change. If it does, update the post's chord list block(s).
    const songDifficulty = useSelect((select) => {
        let songDifficulty = '';
        if (postMeta) {
            const songDifficultyMeta = postMeta?.song_difficulty;
            if ( songDifficultyMeta <= 10 ) {
                songDifficulty = __('Very Beginner');
            } else if (songDifficulty > 10 && songDifficulty <= 20) {
                songDifficulty = __('Beginner');
            } else if (songDifficulty > 20 && songDifficulty <= 30) {
                songDifficulty = __('Beginner-To-Intermediate');
            } else if (songDifficulty > 30 && songDifficulty <= 40) {
                songDifficulty = __('Intermediate');
            } else if (songDifficulty > 40 && songDifficulty <= 50) {
                songDifficulty = __('Advanced');
            }
        }

        console.log('the diff', postMeta?.song_difficulty)
    });

    /**
     * Save meta fields and terms into attributes to be able to nicely display
     * them on the frontend of the block.
     * 
     * @return {void}
     */
    const updateAttributesWithMetaAndTerms = async () => {
        let songDifficultyMeta;
        let songChords = [];
        const chordIds = select('core/editor').getEditedPostAttribute('chords');
        const allChords = select('core').getEntityRecords('taxonomy', 'chords');
        if (Array.isArray(chordIds) && Array.isArray(allChords)) {
            const selectedChords = allChords.filter(chord => chordIds.includes(chord.id));
            songChords = selectedChords.map(chord => chord.name);
        }

        let songDifficulty = '';
        if (postMeta) {
            songDifficultyMeta = postMeta?.song_difficulty;
            if ( songDifficultyMeta <= 10 ) {
                songDifficulty = __('Very Beginner');
            } else if (songDifficulty > 10 && songDifficulty <= 20) {
                songDifficulty = __('Beginner');
            } else if (songDifficulty > 20 && songDifficulty <= 30) {
                songDifficulty = __('Beginner-To-Intermediate');
            } else if (songDifficulty > 30 && songDifficulty <= 40) {
                songDifficulty = __('Intermediate');
            } else if (songDifficulty > 40 && songDifficulty <= 50) {
                songDifficulty = __('Advanced');
            }
        }

        console.log('song', songChords, songDifficulty)
        await setAttributes({
            songChordsAttribute: songChords,
            songDifficultyAttribute: songDifficulty,
            songTitle: 'susssss'
        })

    };

    // Check if the post is saving and then save the meta and taxonomy into attributes.
    useEffect(() => {
        if (isSavingProcess) {
            updateAttributesWithMetaAndTerms();
        }
    }, [isSavingProcess]);

    /**
     * Handle when the user toggles the sidebar CTAs to the right of the embedded
     * Youtube video.
     * 
     * @param {string} sidebarSlot Which sidebar slot to toggle.
     * @param {number} ctaId Which CTA to display in the sidebar.
     * @return {void}
     */
    const handleSidebarToggle = (sidebarSlot, ctaId) => {
        if (ctaData) {
            const numId = Number(ctaId);
            const cta = ctaData.find(cta => cta.id === numId);
            setAttributes({ [sidebarSlot]: {
                id: numId,
                ...cta
            }});
        }
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
            videoUrlRaw: url,
            videoUrlEmbed: `https://www.youtube.com/embed/${parsedVideoID}`
        })
    }

    /**
     * Update youtube video fetch completion message state and make message visible to user.
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
     * Handle a successful youtube video fetch.
     * 
     * Attempts to populate the innerblocks with blocks containing the Youtube description.
     * It adds a song chords and song difficulty block at the top.
     * Adds a paragraph block for each line of the Youtube Video description.
     * If a link is detected, it attempts to add it into a Small CTA block.
     *
     * @param {Object} response Youtube fetch response for a single YT video.
     * @return {void}
     */
    const handleFetchResponse = (response) => {
        try {
            // Remove old innerBlocks in post body.
            const currentBlock = select( 'core/block-editor' ).getBlocksByClientId( clientId )[ 0 ];
            const childBlockIds = currentBlock.innerBlocks.map( block => block.clientId );
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
     * @param {FormEvent} event A form submit event.
     * @param {String} videoID The video ID parsed out from the URL the user entered.
     * @return {void}
     */
    const initFetch = (event, videoID) => {
        event.preventDefault();
        setIsFetching(true);
        setErrorMessage({
            class: 'fetch-message-hidden',
            message: ''
        });
        gapi.load('client', () => {
            gapi.client.setApiKey(gutenbergVars.youtube_api_key);
            gapi.client.load('youtube', 'v3', () => {
                gapi.client.youtube.videos.list({
                    part: 'snippet',
                    id : videoID
                })
                .then(response => {
                    // Fetch successful.
                    setIsFetching(false);
                    handleFetchResponse(response);
                }, error => {
                    setIsFetching(false);
                    // Let the user know the fetch failed.
                    showFetchCompleteMessage( false, error );
                });
            })
        })
    }

    return (
        <div { ...blockProps } className={ className }>
            <PluginDocumentSettingPanel
                name="sidebar-cta-slots"
                title={__("Video sidebar CTA slots")}
                className="sidebar-cta-slots-panel"
            >
                {ctaSelectOptions && <PanelRow>
                     <SelectControl
                        className="sidebar-cta-select-control"
                        label={__('Sidebar CTA slot 1')}
                        value={sidebarCtaSlotOne.id}
                        options={ctaSelectOptions}
                        onChange={(newValue) => handleSidebarToggle("sidebarCtaSlotOne", newValue)}
                    />
                </PanelRow>}
                {ctaSelectOptions && <PanelRow>
                     <SelectControl
                        className="sidebar-cta-select-control"
                        label={__('Sidebar CTA slot 2')}
                        value={sidebarCtaSlotTwo.id}
                        options={ctaSelectOptions}
                        onChange={(newValue) => handleSidebarToggle("sidebarCtaSlotTwo", newValue)}
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
                        onChange={ (newValue) => dispatch('core/editor').editPost({meta: { song_difficulty: newValue }})}
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
                        onChange={ (newValue) => dispatch('core/editor').editPost({meta: { contains_one_barre: newValue }}) }
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
                        value={ videoUrlRaw }
                        onChange={handleURLChange}
                    />
                    <button type="submit" className="yt-submit-button" disabled={isFetching}>{isFetching ? <Spinner /> : __('Submit') }</button>
                </form>
                { videoTitle && <TextControl label={__('Video Title')} value={videoTitle} onChange={(value) => setAttributes({videoTitle: value})} />}
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
                        { videoInfoFetched && <iframe width="560"
                                                  height="615"
                                                  src={videoUrlEmbed}
                                                  className={(sidebarCtaSlotOne.id > 0 || sidebarCtaSlotTwo.id > 0) ? 'iframe-two-third-width' : 'iframe-full-width'}
                                                  title="YouTube video player"
                                                  frameborder="0"
                                                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                  allowfullscreen></iframe> }
                        { ( sidebarCtaSlotOne.id > 0 || sidebarCtaSlotTwo.id > 0 ) && <div className="cta-sidebar">
                            { sidebarCtaSlotOne.id > 0 && <SidebarCta cta={sidebarCtaSlotOne} />}
                            { sidebarCtaSlotTwo.id > 0 && <SidebarCta cta={sidebarCtaSlotTwo} />}
                        </div> }
                    </div>
                    <div className="post-content-video-description">
                        <InnerBlocks />
                    </div>
                </> : <span className="empty-post-body-msg">{__('Submit URL to populate post body.')}</span> }
            </section>
        </div>
    );
}