import { InnerBlocks } from "@wordpress/block-editor";

/**
 * Save react component for Section block.
 * 
 * @param {Object} props React props passed to this component.
 * @returns {JSX}
 */
 export const BlockSave = ({ className, attributes }) => {
    const { gutterWidth } = attributes;

    const gutterStyles = {
        marginLeft: `${gutterWidth}%`,
        marginRight: `${gutterWidth}%`,
    };

    return (
        <div className={className} style={gutterStyles}>
            <InnerBlocks.Content />
        </div>
    );
}