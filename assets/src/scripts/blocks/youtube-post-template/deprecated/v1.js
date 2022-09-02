import { InnerBlocks } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export const v1 = {
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
        videoID: {
            type: 'string',
        },
        videoUrlRaw: {
            type: 'string',
            default: ''
        },
        videoUrlEmbed: {
            type: 'string',
            default: ''
        },
        songTitle: {
            type: 'string',
            default: ''
        },
        sidebarCtaSlotOne: {
            type: 'object',
            default: {},
        },
        sidebarCtaSlotTwo: {
            type: 'object',
            default: {}
        },
        postBodyElements: {
            type: 'array',
            default: []
        }
    },
    save: ({ attributes, className }) => {
        const {
            videoUrlEmbed,
            videoInfoFetched,
            sidebarCtaSlotOne,
            sidebarCtaSlotTwo
        } = attributes;

        const SidebarCta = ({cta}) => {
            const { description, imageUrl, url, buttonText } = cta;
            return (
                <div className="sidebar-cta-card">
                    <img src={imageUrl || gutenbergVars.image_dir + '/good-guitarist-preview-img.png'} alt="" />
                    <div className="cta-card-body">
                        <p className="body-text">{description}</p>
                        <a className="cta-url-button" href={url}>{buttonText || __("Click here")}</a>
                    </div>
                </div>
            )
        }
    
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
                <div class={`youtube-post-type-video-description`}>
                    <InnerBlocks.Content />
                </div>
            </div>
        );
    }
}