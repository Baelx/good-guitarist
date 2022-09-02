const { __ } = wp.i18n;
const { serverSideRender: ServerSideRender } = wp;

/**
 * Placeholder block edit that shows what the component will look like on the frontend.
 * 
 * Block's Save component is rendered in PHP in views/blocks/ypt-search.php
 * 
 * @returns {JSX}
 */
export const BlockEdit = () => (
    <ServerSideRender block="gutenberg-good-guitarist/ypt-search" />
)