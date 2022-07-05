import { __ } from "@wordpress/i18n";
import { InnerBlocks } from "@wordpress/block-editor";
import { InspectorControls } from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";
import { __experimentalNumberControl as NumberControl } from '@wordpress/components';

/**
 * Edit react component for Section block.
 * 
 * @param {Object} props React props passed to this component.
 * @returns {JSX}
 */
export const BlockEdit = ({ className, attributes, setAttributes }) => {
    const { gutterWidth } = attributes;

    const gutterStyles = {
            paddingLeft: `${gutterWidth}%`,
            paddingRight: `${gutterWidth}%`
    };

    return (
        <div className={className} style={gutterStyles}>
            <InspectorControls>
                <PanelBody
                    title={__('Gutter width')}
                    initialOpen={true}
                >
                    <p>{__('Enter a value for the left and right margins of this block. The higher the value, the more space will appear to the left and right of the Section content.')}</p>
                    <p style={{ fontStyle: "italic" }}>{__('The grey colour on either is side is only to illustrate the size of the margins. Grey will not be used on the front end.')}</p>
                    <NumberControl
                        data-testid="gutter-input"
                        onChange={(newValue) => setAttributes({ gutterWidth: newValue })}
                        max={100}
                        min={0}
                        value={gutterWidth}
                    />
                    </PanelBody>
                </InspectorControls>
                <InnerBlocks />
            </div>
        );
}