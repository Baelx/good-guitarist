const { addFilter } = wp.hooks;

/**
 * Modify the Gutenberg group block.
 * 
 * @param {*} settings 
 * @returns 
 */
const modifyGroupBlock = (settings) => {
	if (settings.name !== 'core/group') {
        return settings
    }

    const newSettings = {
        ...settings,
    }

    return settings;
}


addFilter(
    'blocks.registerBlockType',
    'good-guitarist/modify-group-block',
    modifyGroupBlock
)
