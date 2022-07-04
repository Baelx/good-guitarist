const { registerBlockType } = wp.blocks;
const { Fragment, useState } = wp.element;
const {
	PlainText,
	RichText,
	MediaUpload,
	BlockControls,
	InspectorControls,
	ColorPalette,
	getColorClass
} = wp.editor;
const { IconButton, RangeControl, PanelBody, SelectControl } = wp.components;
const { useSelect } = wp.data;
const { parse } = wp.blockSerializationDefaultParser;
const { __ } = wp.i18n;

export const BlockEdit = ({ attributes, className, setAttributes }) => {
    const { selectedCtaId  } = attributes;

    const ctaData = useSelect((select) => {
        return select('core').getEntityRecords('postType', 'cta');
    });

    const isLoading = useSelect((select) => {
        return select('core/data').isResolving('core', 'getEntityRecords', [
            'postType', 'cta'
        ]);
    });

    const ctaOptions = [
        { label: 'Select a call to action', value: null, default: true }
    ];
    const ctaDetails = {};
    if ( ctaData ) {
        ctaData.forEach((cta) => {
            if (cta.id) {
                const parsedBlocks = parse(cta.content.raw);
                /**
                 * There may be multiple blocks in the course post.
                 *
                 * Find the course template block(which should be the first)
                 * and get its attributes.
                 */
                const courseTemplateBlock = parsedBlocks.find(block => 'gutenberg-good-guitarist/course-template' === block.blockName);
                const ctaAtts = courseTemplateBlock.attrs;
                if (ctaAtts) {
                    // Create options for SelectControl.
                    courseOptions.push({label: course.title.raw, value: cta.id});
                    // Keep separate courseDetail objects used to populate attributes.
                    ctaDetails[cta.id] = {
                        title: cta.title.raw,
                        description: ctaAtts.courseDescription,
                        url: ctaAtts.courseUrl,
                        imageId: ctaAtts.imageId,
                        imageUrl: ctaAtts.imageUrl
                    }
                }
            }
        })
    }

    /**
     * 
     * @param {*} selectedCta
     */
    const handleCtaSelect = (selectedCta) => {
        if (selectedCta in ctaDetails) {
            setAttributes({
                selectedCtaId: parseInt(selectedCta),
                selectedCtaTitle: ctaDetails[selectedCta].title,
                selectedCtaDesc: ctaDetails[selectedCta].description,
                selectedCtaImageID: ctaDetails[selectedCta].image,
                selectedCtaLink: ctaDetails[selectedCta].url,
                selectedCtaImageUrl: ctaDetails[selectedCta].imageUrl
            });
        } else {
            setAttributes({
                selectedCtaId: selectedCta,
                selectedCtaTitle: '',
                selectedCtaDesc: '',
                selectedCtaImageID: '',
                selectedCtaLink: '',
                selectedCtaImageUrl: ''
            });
        }
    }

    return (
        <div className={className}>
            <h2 className="dynamic-block-h2">{__('Large Cta Card')}</h2>
            { isLoading && <span>{__('Loading...')}</span>}
            { ctaOptions &&
            <SelectControl
                label="Select call to action"
                value={ selectedCtaId }
                options={ ctaOptions }
                onChange={ handleCtaSelect }
            />
            }
        </div>
    );
}