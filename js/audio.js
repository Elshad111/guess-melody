import {gameGenre} from './game-genre.js';

const playerControl = gameGenre.querySelectorAll('.player-control');

let active;

playerControl.forEach(function(item){
	item.addEventListener('click', function(evt){
		evt.preventDefault();
		item.classList.add('player-control--pause');
		item.classList.remove('player-control--play');
		item.previousElementSibling.play();
		if(active){
			active.classList.remove('player-control--pause');
			active.classList.add('player-control--play');
			active.previousElementSibling.pause();
		}
		active = (active === this) ? 0 : this; 
	});
});

export {getAudio};
