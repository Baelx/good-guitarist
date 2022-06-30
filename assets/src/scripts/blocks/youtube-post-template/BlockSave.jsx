const { InnerBlocks } = wp.blockEditor;
import { SidebarCta } from '../../components/SidebarCta';

export const BlockSave = ({ attributes, className }) => {
    const {
        videoUrlEmbed,
        videoInfoFetched,
        sidebarCtaSlotOne,
        sidebarCtaSlotTwo
    } = attributes;

    return (
        <div className={ className }>
            <div className="youtube-post-video-area">
                { videoInfoFetched && <iframe width="560"
                                            height="715"
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
            <div class={`youtube-post-type-video-description`}>
                <InnerBlocks.Content />
            </div>
        </div>
    );
}