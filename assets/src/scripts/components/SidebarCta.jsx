const { __ } = wp.i18n;

/**
 *
 * @param {*}
 * @returns {JSX}
 */
export const SidebarCta = ({ctaId, ctaData}) => {
    const { description, imageUrl, url, buttonText } = ctaData.find(cta => cta.id === ctaId);
    return (
        <div className="sidebar-cta-card">
            <img src={imageUrl} alt="" />
            <div className="cta-card-body">
                <p className="body-text">{description}</p>
                <a className="cta-url-button" href={url}>{buttonText || __("Click here")}</a>
            </div>
        </div>
    )
}