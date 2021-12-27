'use strict';

const text = document.querySelector('#text');
const bird1 = document.querySelector('#bird1');
const bird2 = document.querySelector('#bird2');
const btn = document.querySelector('#btn');
const forest = document.querySelector('#forest');
const rocks = document.querySelector('#rocks');
const water = document.querySelector('water');
const header = document.querySelector('header');

window.addEventListener('scroll', (event) => {
	const value = window.scrollY;
	text.style.top = `${50 + value * -0.1}%`;
	bird1.style.top = `${value * -0.3}px`;
	bird1.style.left = `${value * 2}px`;
	bird2.style.top = `${value * -0.3}px`;
	bird2.style.left = `${value * -2}px`;
	btn.style.marginTop = `${value * 1.5}px`;
	rocks.style.top = `${value * 0.12}px`;
	forest.style.top = `${value * 0.25}px`;
	header.style.top = `${value * 0.5}px`;
});
