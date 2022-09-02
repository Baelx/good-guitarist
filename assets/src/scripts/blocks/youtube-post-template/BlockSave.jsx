const { InnerBlocks } = wp.blockEditor;
import { SidebarCta } from '../../components/SidebarCta';

/**
 * Save component for Youtube Post Template.
 * 
 * @param {object} props Gutenberg default props.
 * @returns {JSX}
 */
export const BlockSave = ({ attributes }) => {
    const {
        songTitle,
        videoUrlEmbed,
        videoInfoFetched,
        sidebarCtaSlotOne,
        sidebarCtaSlotTwo,
        songChordsAttribute,
        songDifficultyAttribute,
    } = attributes;

    return (
        <div className="wp-block-gutenberg-good-guitarist-ypt">
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
            <div className="whatup">{ songDifficultyAttribute }</div>
            {songChordsAttribute && <div className="song-chords">
                <span className="song-chords-title">{`${songTitle} Chords:`}</span>
                <ul className="song-chords-list">{songChordsAttribute.map(chord => <li className="chord">{chord}</li>)}</ul>
            </div>}
            {songDifficultyAttribute && <div className="song-difficulty">
                <span className="song-difficulty-title">{`${songTitle} Difficulty: ${songDifficultyAttribute}`}</span>
            </div>}
            <div class={`youtube-post-type-video-description`}>
                <InnerBlocks.Content />
            </div>
        </div>
    );
}