const { registerBlockType } = wp.blocks;
const { TextControl } = wp.components;
const { RichText, useBlockProps } = wp.blockEditor;
const { useSelect, useDispatch } = wp.data;
const { useEntityProp } = wp.coreData;
const { __ } = wp.i18n;

registerBlockType( 'gutenberg-good-guitarist/course-template', {
    title: 'Course or Ebook Template',
    icon: 'admin-customizer',
    category: 'text',
	attributes: {},
    edit() {
        const blockProps = useBlockProps();
		/**
		 * Meta data for post type is treated like react app state.
		 *
		 * useSelect and useDispatch allow us to select the current
		 * meta state and to update it respectively.
		 *
		 *  */
		const postMeta = useSelect(( select ) => select( 'core/editor' ).getEditedPostAttribute( 'meta' ));
		const { editPost } = useDispatch( 'core/editor', [ postMeta.course_url, postMeta.course_description ] );

        return (
            <div { ...blockProps }>
				<TextControl
					label={__('Description')}
					value={postMeta.course_description}
					onChange={(newValue) => editPost({meta: { course_description: newValue }})}
				/>

                <TextControl
                    label={__('URL')}
                    value={ postMeta.course_url }
                    onChange={(newValue) => editPost({meta: { course_url: newValue }}) }
                />
            </div>
        );
    },
    save() {
        return null;
    },
} );
