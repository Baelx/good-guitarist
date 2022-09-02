const { parse } = wp.blockSerializationDefaultParser;
const { createBlock } = wp.blocks;

/**
 * Get certain blocks by ID from post content.
 *
 * @param {array} post Post content.
 * @param {string} blockId The block ID to get all instances of.
 * @returns {array}
 */
export const getBlockTypeFromPostContent = (post, blockId) => {
	const parsedBlocks = parse(post.content.raw);
	return parsedBlocks.filter(block =>  blockId === block.blockName);
}

/**
 *  Format CTA data from a CTA post type.
 *
 * @param {array} ctaPosts CTA posts.
 * @returns {array}
 */
export const getCtaDataFromPosts = (ctaPosts) => {
	const validCtaPosts = ctaPosts.filter(ctaPost => {
		return ctaPost.id ? getBlockTypeFromPostContent(ctaPost, 'gutenberg-good-guitarist/cta-template')[0] : undefined;
	})

	return validCtaPosts.map(ctaPost => {
		const ctaAtts = getBlockTypeFromPostContent(ctaPost, 'gutenberg-good-guitarist/cta-template')[0].attrs;
		return {
			id: ctaPost.id,
			title: ctaPost.title.raw,
			description: ctaAtts.description,
			url: ctaAtts.url,
			buttonText: ctaAtts.buttonText,
			imageId: ctaAtts.imageId,
			imageUrl: ctaAtts.imageUrl
		}
	})
}

/**
 * Check if string has http:// or https:// in it.
 *
 * @param {string} stringToCheck
 * @return {string}
 */
export const getLinkFromString = (stringToCheck) => {
	const linkRegex = /(http:\/\/|https:\/\/).*/g;
	let matchedLink = '';
	if ( 'string' === typeof stringToCheck && stringToCheck?.search(linkRegex) >= 0 ) {
		matchedLink = stringToCheck.match(linkRegex);
	}
	// Return the first matched link.
	return matchedLink[0];
}

/**
 * Create a gutenberg block for each paragraph of the fetched
 * youtube description.
 *
 * @param {array} descriptionArray
 * @returns {object}
 */
export const createBlocksFromDescription = (descriptionArray) => {
	const descriptionWithoutEmpties = descriptionArray.filter(description => description.length);
	return descriptionWithoutEmpties.map(description => {
		let matchedLink = getLinkFromString(description);
		let blockType = 'core/paragraph';
		let blockAtts = { content: description };
		if (matchedLink) {
			blockType = 'gutenberg-good-guitarist/small-cta';
			blockAtts = { url: matchedLink, description: description }
		}
		return createBlock(blockType, blockAtts);
	});
}