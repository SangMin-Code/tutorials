'usestrict';

const title = document.querySelector('.title');
const prev = document.querySelector('.prev');
const playPause = document.querySelector('.playPause');
const playIcon = document.querySelector('.playPause ion-icon');
const next = document.querySelector('.next');
const audio = document.querySelector('audio');

//create song list

const songList = [
	{
		path: 'sounds/Gillicuddy - Springish.mp3',
		songName: 'Gillicuddy - Springish',
	},
	{
		path: 'sounds/Jahzzar - Siesta.mp3',
		songName: 'Jahzzar - Siesta',
	},
	{
		path: 'sounds/Jason Shaw - RUNNING WATERS.mp3',
		songName: 'Jason Shaw - RUNNING WATERS',
	},
	{
		path: 'sounds/Kai Engel - Moonlight Reprise.mp3',
		songName: 'Kai Engel - Moonlight Reprise',
	},
	{
		path: 'sounds/Podington Bear - Starling.mp3',
		songName: 'Podington Bear - Starling',
	},
	{
		path: 'sounds/Silence Is Sexy - Holiday (instrumental).mp3',
		songName: 'Silence Is Sexy - Holiday (instrumental)',
	},
];

let song_Playing = false;

//play song
function playSong() {
	song_Playing = true;
	audio.play();
	playPause.classList.add('active');
	playIcon.setAttribute('name', 'pause-outline');
}
//pause song
function pauseSong() {
	song_Playing = false;
	audio.pause();
	playPause.classList.remove('active');
	playIcon.setAttribute('name', 'play-outline');
}

//play or pause song on click
window.addEventListener('load', (event) => {
	//on load - select first song from song list
	loadSong(songList[i]);
});

playPause.addEventListener('click', (event) =>
	song_Playing ? pauseSong() : playSong()
);
prev.addEventListener('click', prevSong);
next.addEventListener('click', nextSong);

// load song
function loadSong(songList) {
	title.textContent = songList.songName;
	audio.src = songList.path;
}

//previous song
function prevSong() {
	i--;
	if (i < 0) {
		i = songList.length - 1;
	}
	loadSong(songList[i]);
	song_Playing && playSong();
}
//next song
function nextSong() {
	i++;
	i = i % songList.length;
	loadSong(songList[i]);
	song_Playing && playSong();
}

//current song
let i = 0;
