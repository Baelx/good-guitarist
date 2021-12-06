import $ from 'jquery';
import 'slick-carousel';

class Carousel {
	constructor() {
		this.init();
	}

	init() {
		console.log('sus',$('.lessons-carousel'))
		$('.lessons-carousel').slick({
			infinite: false,
			slidesToShow: 5,
			slidesToScroll: 1,
			responsive: [
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				  }
				},
				{
				  breakpoint: 600,
				  settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				  }
				},
				{
				  breakpoint: 480,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				  }
				}
			]
		});
	}
}

export default Carousel;
