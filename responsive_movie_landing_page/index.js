'use strict';

const trailer = document.querySelector('.trailer');
const play = document.querySelector('.play');
const close_btn = document.querySelector('.close');
const video = document.querySelector('video');
function toggle() {
	trailer.classList.toggle('active');
	video.currentTime = 0;
	video.pause();
}

window.onload = function () {
	play.addEventListener('click', (event) => {
		toggle();
	});
	close_btn.addEventListener('click', (event) => {
		toggle();
	});
};
