import { getCtaDataFromPosts } from "../utils";
const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
const { MediaUpload } = wp.editor;
const { useBlockProps, BlockControls } = wp.blockEditor;
const { Toolbar, ToolbarDropdownMenu, TextControl, TextareaControl } = wp.components;
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
		url: {
			type: 'string',
			default: ''
		},
		buttonText: {
			type: 'string',
			default: 'Click here'
		},
		imageId: {
			type: "number",
		},
		imageUrl: {
			type: "string",
			default: `${gutenbergVars.image_dir}/good-guitarist-preview-img.png`
		},
	},
	edit({ attributes, setAttributes }) {
		const blockProps = useBlockProps();
		const { url, buttonText, description, imageId, imageUrl } = attributes;

		const ctaSelectOptions = useSelect(select => {
			const ctaPosts = select('core').getEntityRecords('postType', 'cta');
			if (ctaPosts) {
				const ctaData = getCtaDataFromPosts(ctaPosts);

				// Create dropdown options.
				return ctaData.map((cta) => {
					return {
						title: cta.title,
						onClick: () => setAttributes({
							description: cta.description,
							url: cta.url,
							imageId: cta.imageId,
							imageUrl: cta.imageUrl
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
				imageUrl: media.url,
				imageId: media.id,
			});
		};

		return (
			<div {...blockProps} className="small-cta">
				<BlockControls>
					<Toolbar>
						{ctaSelectOptions && <ToolbarDropdownMenu
							icon="update"
							label="Use with an existing course"
							controls={ctaSelectOptions}
						/>}
					</Toolbar>
				</BlockControls>
				<div className="image-container">
					<img src={imageUrl} alt="" />
					<MediaUpload
						onSelect={onSelectImage}
						allowedTypes="image"
						value={imageId}
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
						value={url}
						onChange={value => setAttributes({ url: value })}
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
});
