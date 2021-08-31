const { registerBlockType } = wp.blocks;
const { TextControl } = wp.components;
const { RichText, useBlockProps } = wp.blockEditor;
const { useSelect } = wp.data;
const { useEntityProp } = wp.coreData;
const { __ } = wp.i18n;

registerBlockType( 'myguten/course-template', {
    title: 'Course Template',
    icon: 'admin-customizer',
    category: 'text',
	attributes: {
		courseDescription: {
			type: 'string'
		}
	},
    edit( { setAttributes, attributes } ) {
        const blockProps = useBlockProps();
        const postType = useSelect( ( select ) => select( 'core/editor' ).getCurrentPostType(), [] );
        const [ meta, setMeta ] = useEntityProp( 'postType', postType, 'meta' );
        const ctaUrlField = meta[ 'cta_url' ];
        function updateCtaUrlField( newValue ) {
            setMeta( { ...meta, cta_url: newValue } );
        }

        return (
            <div { ...blockProps }>
				<RichText
					value={courseDescription}
					onChange={ (courseDescription) => setAttributes( { courseDescription } )}
				/>
                <TextControl
                    label="Button URL"
                    value={ ctaUrlField }
                    onChange={ updateCtaUrlField }
                />
            </div>
        );
    },
    save() {
        return null;
    },
} );
