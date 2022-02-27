const { registerBlockType } = wp.blocks;
const { Fragment } = wp.element;
const { __ } = wp.i18n;
const {
	PlainText,
	RichText,
	MediaUpload,
	BlockControls,
	InspectorControls,
	ColorPalette,
	getColorClass
} = wp.editor;
const { useBlockProps } = wp.blockEditor;
const { IconButton, RangeControl, PanelBody, TextControl, TextareaControl } = wp.components;

registerBlockType( 'gutenberg-good-guitarist/small-cta', {
	title: 'Small Call to Action',
	icon: 'format-image',
	category: 'layout',
	className: 'small-cta',
	attributes: {
		description: {
			type: 'string',
			default: ''
		},
		link: {
			type: 'string',
			default: ''
		},
		buttonText: {
			type: 'string',
			default: ''
		},
		mediaId: {
			type: "number",
		},
		mediaUrl: {
			type: "string",
		},
	},
	edit({ className, attributes, setAttributes }) {
		const blockProps = useBlockProps();
		const { link, description, mediaId, mediaUrl } = attributes;

		/**
		 * Event handler for When images is selected.
		 *
		 * @param   {object}  media  The media object, to set url, and id.
		 */
		const onSelectImage = (media) => {
			props.setAttributes({
				mediaUrl: media.url,
				mediaId: media.id,
			});
		};

		/**
		 *
		 */
		const deleteSelectedImage = () => {
			props.setAttributes({
				mediaUrl: "",
				mediaId: "",
			});
		};

		return (
			<div {...blockProps} className="small-cta">
				<img src="" alt="" />
				<MediaUpload
					onSelect={onSelectImage}
					allowedTypes="image"
					value={mediaId}
					render={({ open }) => (
					<div className="image-button-controls">
						<a
						className={"image-button add-image-button"}
						onClick={open}
						tabIndex="0"
						>
						{!mediaId
							? __("Upload Image")
							: __("Change Image")}
						</a>
						{mediaId && (
						<a
							className={"image-button clear-image-button"}
							onClick={deleteSelectedImage}
							tabIndex="0"
						>
							<img src={TrashIcon} />
						</a>
						)}
					</div>
					)}
				/>
				<TextareaControl
					label="Description"
					value={description}
					onChange={value => setAttributes({ description: value })}
				/>
				<TextControl
					label="Link"
					value={link}
					onChange={value => setAttributes({ link: value })}
				/>
 			</div>
		)

	},
	save({ attributes }) {
		// const blockProps = useBlockProps();
		const { link, buttonText } = attributes;

		return (
			<div>
				<img src="" alt="" />
				<p>{description}</p>
				<button href={link}>{buttonText}</button>
			</div>
		)
	}

});
