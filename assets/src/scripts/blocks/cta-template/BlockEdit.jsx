const { TextControl, Button } = wp.components;
const { useBlockProps, MediaUpload, MediaUploadCheck } = wp.blockEditor;
const { __ } = wp.i18n;

export const BlockEdit = ({attributes, setAttributes}) => {
    const {url, description, buttonText, imageId, imageUrl} = attributes;
    const blockProps = useBlockProps();

    const onSelectMedia = (newImage) => {
        setAttributes({
            imageId: newImage.id,
            imageUrl: newImage.url
        });
    }

    const removeMedia = () => {
        setAttributes({
            imageId: 0,
            imageUrl: ''
        });
    }

    return (
        <div { ...blockProps }>
            <TextControl
                label={__('Description')}
                value={description}
                onChange={(newValue) => setAttributes({description: newValue})}
            />
            <TextControl
                label={__('URL')}
                value={url}
                onChange={(newValue) => setAttributes({url: newValue})}
            />
            <TextControl
                label={__('Button text (if nothing is entered, button text will be "Click here")')}
                value={buttonText}
                onChange={(newValue) => setAttributes({buttonText: newValue})}
            />
            <div className="media-upload-component">
                <label className="image-label">{__('Call to action thumbnail (if no image is chosen, a default image will be used)')}</label>
                { imageUrl && <img className="course-image" src={imageUrl} /> }
                <MediaUploadCheck>
                    <MediaUpload
                        onSelect={onSelectMedia}
                        allowedTypes={ ['image'] }
                        render={({open}) => (
                            <Button
                            className={0 === imageId ? 'select-image-button' : 'select-image-button button-hidden'}
                            onClick={open}
                            >
                                {imageId == 0 && __('Choose an image')}
                            </Button>
                        )}
                        />
                </MediaUploadCheck>
                {imageId !== 0 &&
                    <MediaUploadCheck>
                        <Button onClick={removeMedia} isLink isDestructive>{__('Remove image')}</Button>
                    </MediaUploadCheck>
                }
            </div>
        </div>
    );
}