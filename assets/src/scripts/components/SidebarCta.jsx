const { __ } = wp.i18n;

/**
 *
 * @param {*}
 * @returns {JSX}
 */
export const SidebarCta = ({ctaId, ctaData}) => {
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