const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls } = wp.editor;
const { useBlockProps } = wp.blockEditor;
const {
	Button,
	PanelBody,
	PanelRow,
	Dashicon
} = wp.components;
const { useEffect, useState } = wp.element;
const { select, useSelect } = wp.data;
const { __ } = wp.i18n;
const { parse } = wp.blockSerializationDefaultParser;

registerBlockType( 'gutenberg-good-guitarist/latest-lessons', {
	title: 'Latest Lessons',
	icon: 'list',
	category: 'layout',
	className: 'latest-lessons',
	attributes: {
		lessons: {
			type: 'string',
		}
	},
	edit: ({ attributes, className}) => {
		const blockProps = useBlockProps();

		return (
			<div {...blockProps}>
				<h2 className="dynamic-block-h2">{__('Latest Lessons Carousel')}</h2>
			</div>
		)
	},
	save: () => null
})
