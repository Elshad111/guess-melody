import {render, changeScreen} from './util.js';
import {gameArtist} from './game-artist.js';
import {initialState} from './constants/constants.js';
console.log(initialState);

let countMistake = 0;
let countPoints = 0;

const levels = {
  'level-1' : {
    quastion : 'Выберите инди-рок треки',
    answers : {
      'https://www.youtube.com/audiolibrary_download?vid=79100e44c826e2f7' : null,
      'https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed' : null,
      'https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b' : 'level-2',
      'https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf' : null
    }
  }, 
  'level-2' : {

  }
};

const svgTimer = `<svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
      <circle
        cx="390" cy="390" r="370"
        class="timer-line"
        style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>
      <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
        <span class="timer-value-mins">05</span><!--
        --><span class="timer-value-dots">:</span><!--
        --><span class="timer-value-secs">00</span>
      </div>
    </svg>`;

const mistakes = `<div class="main-mistakes">
      ${new Array(3 - initialState.mistake).fill(`<img class="main-mistake" src="img/icon-note-active.png" width="35" height="49">`).join('')}
    </div>`;

const formGenre = `<form class="genre">
        <div class="genre-answer">
  <div class="player-wrapper">
    <div class="player">
      <audio src="https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed"></audio>
      <button class="player-control player-control--pause"></button>
      <div class="player-track">
        <span class="player-status"></span>
      </div>
    </div>
  </div>
  <input type="checkbox" name="answer" value="answer-1" id="a-1">
  <label class="genre-answer-check" for="a-1"></label>
</div>
<div class="genre-answer">
  <div class="player-wrapper">
    <div class="player">
      <audio src="https://www.youtube.com/audiolibrary_download?vid=79100e44c826e2f7"></audio>
      <button class="player-control player-control--play"></button>
      <div class="player-track">
        <span class="player-status"></span>
      </div>
    </div>
  </div>
  <input type="checkbox" name="answer" value="answer-1" id="a-2">
  <label class="genre-answer-check" for="a-2"></label>
</div>
<div class="genre-answer">
  <div class="player-wrapper">
    <div class="player">
      <audio src="https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b"></audio>
      <button class="player-control player-control--play"></button>
      <div class="player-track">
        <span class="player-status"></span>
      </div>
    </div>
  </div>
  <input type="checkbox" name="answer" value="answer-1" id="a-3">
  <label class="genre-answer-check" for="a-3"></label>
</div>
<div class="genre-answer">
  <div class="player-wrapper">
    <div class="player">
      <audio src="https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf"></audio>
      <button class="player-control player-control--play"></button>
      <div class="player-track">
        <span class="player-status"></span>
      </div>
    </div>
  </div>
  <input type="checkbox" name="answer" value="answer-1" id="a-4">
  <label class="genre-answer-check" for="a-4"></label>
</div>
        <button class="genre-answer-send" type="button" disabled="disabled">Ответить</button>
      </form>`;

const gameGenre =  render(`<section class="main main--level main--level-genre">
    ${svgTimer}
    ${mistakes}
    <div class="main-wrap">
      <h2 class="title">${levels['level-1'].quastion}</h2>
      ${formGenre}
    </div>
  </section>`);

const genreAnswerSend = gameGenre.querySelector('.genre-answer-send');
const genreAnswerCheck = gameGenre.querySelectorAll('input[type=checkbox]');
const genre = gameGenre.querySelector('.genre');

const checkInput = (array) => {
  let flag = false;
  for(var i = 0; i < array.length; i++){
    if(array[i].checked){
      flag = true;
      break;
    }
  }
  return flag;
};

genre.addEventListener('change', () => {
  if(checkInput(genreAnswerCheck)){
    genreAnswerSend.disabled = '';
  }else{
    genreAnswerSend.disabled = 'disabled';
  }
});

const renderScreen = () => {

}

genreAnswerSend.addEventListener('click', () => {
  
  //changeScreen(gameArtist);
});

export {gameGenre};


