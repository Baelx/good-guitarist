const { select } = wp.data;

export const getAllCtasData = async () => {
	const ctaPosts = await select('core').getEntityRecords('postType', 'cta');

	console.log('lol', ctaPosts);

	if (!ctaPosts) {
		return [];
	}

	return ctaPosts.forEach((course) => {
		if (course.id) {
			const parsedBlocks = parse(course.content.raw);
			/**
			 * There may be multiple blocks in the course post.
			 *
			 * Find the course template block(which should be the first)
			 * and get its attributes.
			 */
			const ctaTemplateBlock = parsedBlocks.find(block => 'gutenberg-good-guitarist/cta-template' === block.blockName);
			const ctaAtts = ctaTemplateBlock.attrs;
			if (ctaAtts) {
				return {
					title: course.title.raw,
					description: courseAtts.courseDescription,
					link: courseAtts.courseUrl,
					mediaId: courseAtts.imageId,
					mediaUrl: courseAtts.imageUrl
				}
			}
		}
	})
}
