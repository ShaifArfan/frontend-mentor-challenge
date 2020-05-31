let images = document.querySelector('.slide-img img');
let buttons_div = document.querySelector('.buttons');
const next = buttons_div.querySelector('.next');
const prev = buttons_div.querySelector('.prev');
const slides = document.querySelectorAll('.slider .slide');
let index = 0;

buttons_div.style.top = `${images.offsetTop + images.height - buttons_div.offsetHeight / 2}px`;
window.addEventListener('resize', (e) => {
	images = document.querySelector('.slide-img img');
	buttons_div = document.querySelector('.buttons');
	buttons_div.style.top = `${images.offsetTop + images.height - buttons_div.offsetHeight / 2}px`;
});
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
