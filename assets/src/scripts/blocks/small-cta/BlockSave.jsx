export const BlockSave = ({ attributes }) => {
    const { url, buttonText, description, imageUrl } = attributes;

    return (
        <div>
            <div className="image-container">
                <img src={imageUrl} alt="" />
            </div>
            <div className="details-container">
                <p>{description}</p>
                <button className="cta-button" href={url}>{buttonText}</button>
            </div>
        </div>
    )
}