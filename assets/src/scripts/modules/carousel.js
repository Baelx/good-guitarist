import $ from 'jquery';
import 'slick-carousel/slick/slick';

export class Carousel {
	constructor() {
		this.init();
	}

	init() {
		$('.lessons-carousel').slick({
			infinite: false,
			slidesToShow: 4,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 3000,
			responsive: [
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
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
