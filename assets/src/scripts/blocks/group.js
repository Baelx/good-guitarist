const { addFilter } = wp.hooks;

/**
 * When this function gets run by the addfilter
 * hook below, the filter passes it the block settings
 * or config file.
 */
const modifyGroupBlock = (settings) => {
    console.log(settings.name)

	if (settings.name !== 'core/group') {
        return settings
    }

    const newSettings = {
        ...settings, // This copies the old settings.  Now we can edit them!
    }

    // we need to pass along the settings object
    // even if we haven't modified them!
    return settings;
}


addFilter(
    'blocks.registerBlockType', // hook name, very important!
    'good-guitarist/modify-group-block', // your name, very arbitrary!
    modifyGroupBlock // function to run
)
