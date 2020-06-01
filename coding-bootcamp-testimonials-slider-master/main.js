const next = buttons_div.querySelector('.next');
const prev = buttons_div.querySelector('.prev');
const slides = document.querySelectorAll('.slider .slide');
let index = 0;

display(0);

function display (index) {
	slides.forEach((slide) => {
		slide.style.display = 'none';
		slides[index].style.display = 'flex';
	});
}
function nextSlide () {
	index++;
	if (index > slides.length - 1) {
		index = 0;
	}
	display(index);
	console.log(slides);
}

function prevSlide () {
	index--;
	if (index < 0) {
		index = slides.length - 1;
	}
	display(index);
	console.log(slides);
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
