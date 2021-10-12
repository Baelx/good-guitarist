const { registerBlockType } = wp.blocks;
const {
	RichText,
	InspectorControls
} = wp.editor;
const {
	Button,
	PanelBody,
	PanelRow,
} = wp.components;
const { useEffect } = wp.element;
const { select, useSelect } = wp.data;

registerBlockType( 'gutenberg-good-guitarist/latest-lessons', {
	title: 'Latest Lessons',
	icon: 'list',
	category: 'layout',
	className: 'latest-lessons',
	attributes: {
		lessons: {
			type: 'string',
		},
		scrollPosition: {
			type: 'integer'
		}
	},
	edit: ({ attributes, className}) => {
		const { scrollPosition } = attributes;

		useEffect(() => {
			const lessons = useSelect((select) => {
				return select('core').getEntityRecords('postType', 'youtube-post');
			});

			console.log(lessons);
		}, [])

		return (
			<div className={className}>
				{scrollPosition > 0 &&
					<Button
						className="more-lessons-left-arrow"
						onClick={() => {
							setScrollPosition( (newScrollPosition) => newScrollPosition - 1)
						}}
					>
						<i>{"<"}</i>
					</Button>
				}
				{lessons && lessons.map((lesson) => (
					<a key={lesson.id} href="">
						<img className="lesson-thumbnail" src={lesson.thumbnail}></img>
					</a>
				))}
				{mockLessons.length > 5 &&
					<Button
						className="more-lessons-right-arrow"
						onClick={() => {
							setScrollPosition( (newScrollPosition) => newScrollPosition + 1)
							console.log('sup', scrollPosition)
						}}
					>
						<i>{">"}</i>
					</Button>
				}
			</div>
		)
	},
	save: ({className}) => {

		let scrollPosition = 0;

		return (
			<div className={className}>
				{scrollPosition > 0 &&
					<Button
						className="more-lessons-left-arrow"
						onClick={() => {
							scrollPosition--
							console.log('new scroll positon', scrollPosition)
						}}
					>
						<i>{"<"}</i>
					</Button>
				}

				{/* {lessons && lessons.map((lesson) => (
					<a href="">
						<img className="lesson-thumbnail" src={lesson.thumbnail}></img>
					</a>
				))}
				{mockLessons.length > 5 &&
					<Button
						className="more-lessons-right-arrow"
						onClick={() => {
							scrollPosition++
							console.log('new scroll positon', scrollPosition)
						}}
					>
						<i>{">"}</i>
					</Button>
				} */}
			</div>
		)
	}
})
