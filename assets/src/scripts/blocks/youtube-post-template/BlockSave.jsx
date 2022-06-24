const { InnerBlocks } = wp.blockEditor;

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
            <div class={`youtube-post-type-video-description`}>
                <InnerBlocks.Content />
            </div>
        </div>
    );
}