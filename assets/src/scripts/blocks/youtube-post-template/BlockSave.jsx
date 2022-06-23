const { InnerBlocks } = wp.blockEditor;

export const BlockSave = ({ attributes, className }) => {
    const {
        videoEmbedUrl,
        videoDescription,
        videoInfoFetched
    } = attributes;

    return (
        <div className={ className }>
            { videoInfoFetched && <iframe src={videoEmbedUrl}
                                         title="YouTube video player"
                                         frameborder="0"
                                         allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                         allowfullscreen></iframe>}
            <div class={`youtube-post-type-video-description`}>
                <InnerBlocks.Content />
            </div>
        </div>
    );
}