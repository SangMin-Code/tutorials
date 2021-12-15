const colors = ['#017143', '#eb7495', '#d752b1'];

function imgslider(anything) {
	console.log(anything);
	document.querySelector('.starbucks').src = anything;
}

function changeCircleColor(color) {
	const circle = document.querySelector('.circle');
	const text = document.querySelector('.colorText');
	const learnMore = document.querySelector('.colorLearnMore');
	circle.style.background = color;
	text.style.color = color;
	learnMore.style.background = color;
}

function addClickEventOnThumb() {
	const thumbList = document.querySelectorAll('.thumb li');
	Object.keys(thumbList).map((key, index) => {
		thumbList[key].addEventListener('click', (event) => {
			imgslider(`images/img${index + 1}.png`);
			changeCircleColor(colors[index]);
		});
	});
}

addClickEventOnThumb();
