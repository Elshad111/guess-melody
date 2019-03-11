import {render, changeScreen} from './util.js';
import {welcomeScreen} from './welcome-screen.js';

const failTime = render(`<section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <h2 class="title">Увы и ах!</h2>
    <div class="main-stat">Время вышло!<br>Вы не успели отгадать все мелодии</div>
    <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
</section>`);

const mainReplay = failTime.querySelector('.main-replay');
mainReplay.addEventListener('click', () => {
	changeScreen(welcomeScreen);
});
export {failTime};