const { registerBlockType } = wp.blocks;
const { TextControl, FormFileUpload, Button } = wp.components;
const { RichText, useBlockProps, MediaUpload, MediaUploadCheck } = wp.blockEditor;
const { useSelect, useDispatch } = wp.data;
const { useEntityProp } = wp.coreData;
const { __ } = wp.i18n;

registerBlockType( 'gutenberg-good-guitarist/cta-template', {
    title: 'Call to Action Template',
    icon: 'admin-customizer',
    category: 'text',
	attributes: {
		courseDescription: {
			type: 'string',
			default: ''
		},
		courseUrl: {
			type: 'string',
			default: ''
		},
		imageId: {
			type: 'integer',
			default: 0
		},
		imageUrl: {
			type: 'string',
			default: ''
		}
	},
    edit({attributes, setAttributes}) {
		const {courseUrl, courseDescription, imageId, imageUrl} = attributes;
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
					value={courseDescription}
					onChange={(newValue) => setAttributes({courseDescription: newValue})}
				/>
                <TextControl
                    label={__('URL')}
                    value={courseUrl}
                    onChange={(newValue) => setAttributes({courseUrl: newValue})}
                />
				<div className="media-upload-component">
					<label className="image-label">{__('Course Thumbnail')}</label>
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
    },
    save() {
        return null;
    },
} );
