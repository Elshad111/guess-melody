import {render, changeScreen} from './util.js';
import {renderScreen} from './game-genre.js';

const welcomeScreen = render(`<section class="main main--welcome">
	<section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
	<button class="main-play">Начать игру</button>
	<h2 class="title main-title">Правила игры</h2>
	<p class="text main-text">
	  Правила просты&nbsp;— за&nbsp;5 минут ответить на все вопросы.<br>
	  Ошибиться можно 3 раза.<br>
	  Удачи!
	</p>
</section>`);

//const playerControl = gameGenre.querySelectorAll('.player-control');

const mainPlay = welcomeScreen.querySelector('.main-play');
mainPlay.addEventListener('click', function(){
	// if(playerControl[0].classList.contains('player-control--pause')){
	// 	const item = playerControl[0];
	// 	item.previousElementSibling.play();
	// 	item.click();
	// }
	changeScreen(renderScreen);
});

export {welcomeScreen};
