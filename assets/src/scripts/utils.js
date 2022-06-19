const { parse } = wp.blockSerializationDefaultParser;

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
