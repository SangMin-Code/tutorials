function rain() {
	const amount = 30;
	const body = document.querySelector('body');
	let i = 0;

	while (i < amount) {
		const drop = document.createElement('i');

		const size = Math.random() * 5;
		const posX = Math.floor(Math.random() * window.innerWidth);
		const delay = Math.random() * -20;
		const duration = Math.random() * 5;

		drop.style.width = `${0.2 + size}px`;
		drop.style.left = `${posX}px`;
		drop.style.animationDelay = `${delay}s`;
		drop.style.animationDuration = `${1 + duration}s`;
		body.appendChild(drop);
		i++;
	}
}

rain();
