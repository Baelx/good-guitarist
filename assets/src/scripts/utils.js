const { parse } = wp.blockSerializationDefaultParser;
const { createBlock } = wp.blocks;

/**
 * Parse 'gutenberg-good-guitarist/cta-template' block from a post.
 *
 * @param {array} ctaPost
 * @returns {array}
 */
const getCtaTemplateBlockFromPost = (ctaPost) => {
	const parsedBlocks = parse(ctaPost.content.raw);
	return parsedBlocks.find(block => 'gutenberg-good-guitarist/cta-template' === block.blockName);
}

/**
 *  Format CTA data from a CTA post.
 *
 * @param {array} ctaPosts
 * @returns {array}
 */
export const getCtaDataFromPosts = (ctaPosts) => {
	const validCtaPosts = ctaPosts.filter(ctaPost => {
		return ctaPost.id ? getCtaTemplateBlockFromPost(ctaPost) : undefined;
	})

	return validCtaPosts.map(ctaPost => {
		const ctaAtts = getCtaTemplateBlockFromPost(ctaPost).attrs;
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
 * @returns
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