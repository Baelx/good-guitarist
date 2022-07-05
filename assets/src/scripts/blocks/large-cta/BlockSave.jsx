export const BlockSave = ({ attributes, className }) => {
    const { title, url, buttonText, description, imageUrl } = attributes;

    return (
        <div className={className}>
            <img className="lcc-image" src={imageUrl} alt="" />
            <div>
                <h3 className="lcc-heading">{title}</h3>
                <div className="lcc-body">{description}</div>
            </div>
            <a className="lcc-button" href={url}>{buttonText}</a>
        </div>
    )
}