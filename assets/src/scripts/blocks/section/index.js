import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import { BlockEdit } from './BlockEdit';
import { BlockSave } from './BlockSave';

registerBlockType("gutenberg-good-guitarist/section", {
  title: __("Section"),
  icon: "align-full-width",
  category: "layout",
  attributes: {
      gutterWidth: {
          type: 'number',
          default: 0,
      },
  },
  edit: BlockEdit,
  save: BlockSave,
});