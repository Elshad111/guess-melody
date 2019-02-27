'use strict';
(function(){
	const app = document.querySelector('.app');
	const screenPattern = [
		'.main .main--welcome',
		'.main .main--level .main--level-genre',
		'.main .main--level .main--level-artist',
		'.main .main--result',
		'.main .main--result',
		'.main .main--result'
	];

	const arrowsWrap = document.createElement('div');
	arrowsWrap.classList.add('arrows__wrap');
	arrowsWrap.innerHTML = `<style>
      .arrows__wrap {
        position: absolute;
        top: 135px;
        left: 50%;
        margin-left: -56px;
      }
      .arrows__btn {
        background: none;
        border: 2px solid black;
        padding: 5px 20px;
      }
    </style>
    <button class="arrows__btn"><-</button>
    <button class="arrows__btn">-></button>`;
    app.appendChild(arrowsWrap);
})();