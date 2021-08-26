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
const {
    element: {
        useState,
    },
} = wp;


// const {
// 	URLInput,
// 	URLInputButton,
// } = wp.blockEditor;

registerBlockType( 'gutenberg-good-guitarist/latest-lessons', {
	title: 'Latest Lessons',
	icon: 'list',
	category: 'layout',
	className: 'latest-lessons',
	attributes: {},
	edit: ({className}) => {

		const mockLessons = [
			{
				slug: 'test_slug',
				thumbnail: 'https://source.com'
			},
			{
				slug: 'another_slug',
				thumbnail: 'https://source.com'
			},
			{
				slug: 'great_slug',
				thumbnail: 'https://source.com'
			},
			{
				slug: 'banana_slug',
				thumbnail: 'https://source.com'
			},
			{
				slug: 'hello_slug',
				thumbnail: 'https://source.com'
			},
			{
				slug: 'testing_slug',
				thumbnail: 'https://source.com'
			},
			{
				slug: 'no_slug',
				thumbnail: 'https://source.com'
			},
		];

		const [scrollPosition, setScrollPosition] = useState(0);

		return (
			<div className={className}>
				{scrollPosition > 0 &&
					<Button
						className="more-lessons-left-arrow"
						onClick={() => {
							setScrollPosition( (newScrollPosition) => newScrollPosition - 1)
							console.log('sup', scrollPosition)
						}}
					>
						<i>{"<"}</i>
					</Button>
				}
				{mockLessons.map((lesson) => (
					<a href={lesson.slug}>
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

		const mockLessons = [
			{
				slug: 'test_slug',
				thumbnail: 'https://source.com'
			},
			{
				slug: 'another_slug',
				thumbnail: 'https://source.com'
			},
			{
				slug: 'great_slug',
				thumbnail: 'https://source.com'
			},
			{
				slug: 'banana_slug',
				thumbnail: 'https://source.com'
			},
			{
				slug: 'hello_slug',
				thumbnail: 'https://source.com'
			},
			{
				slug: 'testing_slug',
				thumbnail: 'https://source.com'
			},
			{
				slug: 'no_slug',
				thumbnail: 'https://source.com'
			},
		];

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
				{mockLessons.map((lesson) => (
					<a href={lesson.slug}>
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
				}
			</div>
		)
	}
})
