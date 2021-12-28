'use strict';

const ul_list = document.querySelectorAll('li');

function toggleListActive(click) {
	ul_list.forEach((item) => item.classList.remove('active'));
	click.classList.add('active');
}

window.onload = () => {
	ul_list.forEach((item) =>
		item.addEventListener('click', () => {
			toggleListActive(item);
		})
	);
};
