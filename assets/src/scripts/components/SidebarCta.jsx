const { __ } = wp.i18n;

/**
 * Small call to action block that appears in Youtube post sidebars.
 * 
 * @param {object} cta The CTA info to display.
 * @returns {JSX}
 */
export const SidebarCta = ({cta}) => {
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