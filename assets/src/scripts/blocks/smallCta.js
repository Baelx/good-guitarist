import { getCtaDataFromPosts } from "../utils";
const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
const {
	PlainText,
	RichText,
	MediaUpload,
	InspectorControls,
	ColorPalette,
	getColorClass
} = wp.editor;
const { useBlockProps, BlockControls } = wp.blockEditor;
const {
	Icon,
	ToolbarButton,
	ToolbarGroup,
	ToolbarDropdownMenu,
	RangeControl,
	PanelBody,
	TextControl,
	TextareaControl
} = wp.components;
const { useSelect } = wp.data;

registerBlockType( 'gutenberg-good-guitarist/small-cta', {
	title: 'Small Call to Action',
	icon: 'megaphone',
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
			default: 'Click here'
		},
		mediaId: {
			type: "number",
		},
		mediaUrl: {
			type: "string",
			default: `${gutenbergVars.image_dir}/good-guitarist-preview-img.png`
		},
	},
	edit({ className, attributes, setAttributes }) {
		const blockProps = useBlockProps();
		const { link, buttonText, description, mediaId, mediaUrl } = attributes;

		const ctaSelectOptions = useSelect(select => {
			const ctaPosts = select('core').getEntityRecords('postType', 'cta');
			if (ctaPosts) {
				const ctaData = getCtaDataFromPosts(ctaPosts);

				// Create dropdown options.
				return ctaData.map((cta) => {
					return {
						title: cta.title,
						onClick: setAttributes({
							description: cta.description,
							link: cta.link,
							mediaId: cta.mediaId,
							mediaUrl: cta.mediaUrl
						})
					}
				});
			}
		});

		/**
		 * Event handler for When images is selected.
		 *
		 * @param   {object}  media  The media object, to set url, and id.
		 */
		const onSelectImage = (media) => {
			setAttributes({
				mediaUrl: media.url,
				mediaId: media.id,
			});
		};

		return (
			<div {...blockProps} className="small-cta">
				<BlockControls>
					{ctaSelectOptions && <ToolbarDropdownMenu
						icon="update"
						label="Use with an existing course"
						controls={ctaSelectOptions}
					/>}
				</BlockControls>
				<div className="image-container">
					<img src={mediaUrl} alt="" />
					<MediaUpload
						onSelect={onSelectImage}
						allowedTypes="image"
						value={mediaId}
						render={({ open }) => (
							<button
							type="text"
							className={"image-button change-image-button"}
							onClick={open}
							>{__("Change Image")}</button>
						)}
					/>
				</div>
				<div className="details-container">
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
					<TextControl
						className="button-text-input"
						label="Button text"
						value={buttonText}
						onChange={value => setAttributes({ buttonText: value })}
					/>
				</div>
 			</div>
		)

	},
	save({ attributes }) {
		const { link, buttonText, description, mediaUrl } = attributes;

		return (
			<div>
				<div className="image-container">
					<img src={mediaUrl} alt="" />
				</div>
				<div className="details-container">
					<p>{description}</p>
					<button className="cta-button" href={link}>{buttonText}</button>
				</div>
			</div>
		)
	}
});
