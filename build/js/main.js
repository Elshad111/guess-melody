(function () {
	'use strict';

	const render = (template) => {
		const div = document.createElement('div');
		div.innerHTML = template.trim();
		return div;
	};

	const main = document.querySelector('.main');

	const changeScreen = (element) => {
		main.innerHTML = ``;
		main.appendChild(element.childNodes[0]);
	};

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

	changeScreen(welcomeScreen);

	// const ARROW_RIGHT = 39;
	// const ARROW_LEFT = 37;
	// const app = document.querySelector('.app');
	// const main = app.querySelector('.main');
	// const template = document.querySelector('#templates').content.children;
	// const templateArray = [];
	// let index = 0;

	// for (let i = 0; i < template.length; i++){
	// 	templateArray.push(template[i]);
	// }

	// const arrowsWrap = document.createElement('div');
	// arrowsWrap.classList.add('arrows__wrap');
	// arrowsWrap.innerHTML = `<style>
	//   .arrows__wrap {
	//     position: absolute;
	//     top: 135px;
	//     left: 50%;
	//     margin-left: -56px;
	//   }
	//   .arrows__btn {
	//     background: none;
	//     border: 2px solid black;
	//     padding: 5px 20px;
	//   }
	// </style>
	// <button class="arrows__btn"><-</button>
	// <button class="arrows__btn">-></button>`;
	// app.appendChild(arrowsWrap);
	// main.appendChild(templateArray[index]);

	// const leftArrowHandler = function(){
	// 	index++;
	// 	if (index > templateArray.length - 1){
	// 		index = 0;
	// 	}
	// 	main.innerHTML = "";
	// 	main.appendChild(templateArray[index]);
	// };

	// const rightArrowHandler = function(){
	// 	index--;
	// 	if (index < 0){
	// 		index = templateArray.length - 1;
	// 	}
	// 	main.innerHTML = "";
	// 	main.appendChild(templateArray[index]);
	// };

	// const leftArrow = document.querySelectorAll('.arrows__btn')[0];
	// const rightArrow = document.querySelectorAll('.arrows__btn')[1];

	// leftArrow.addEventListener('click', leftArrowHandler);
	// document.addEventListener('keydown', function(evt){
	// 	if (evt.keyCode === ARROW_LEFT){
	// 		leftArrowHandler();
	// 	}
	// });
	// rightArrow.addEventListener('click', rightArrowHandler);
	// document.addEventListener('keydown', function(evt){
	// 	if (evt.keyCode === ARROW_RIGHT){
	// 		rightArrowHandler();
	// 	}
	// });

}());

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsianMvdXRpbC5qcyIsImpzL3dlbGNvbWUtc2NyZWVuLmpzIiwianMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcmVuZGVyID0gKHRlbXBsYXRlKSA9PiB7XG5cdGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRkaXYuaW5uZXJIVE1MID0gdGVtcGxhdGUudHJpbSgpO1xuXHRyZXR1cm4gZGl2O1xufTtcblxuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG5cbmV4cG9ydCBjb25zdCBjaGFuZ2VTY3JlZW4gPSAoZWxlbWVudCkgPT4ge1xuXHRtYWluLmlubmVySFRNTCA9IGBgO1xuXHRtYWluLmFwcGVuZENoaWxkKGVsZW1lbnQuY2hpbGROb2Rlc1swXSk7XG59OyBcblxuIiwiaW1wb3J0IHtyZW5kZXIsIGNoYW5nZVNjcmVlbn0gZnJvbSAnLi91dGlsLmpzJztcbmNvbnN0IHdlbGNvbWVTY3JlZW4gPSByZW5kZXIoYDxzZWN0aW9uIGNsYXNzPVwibWFpbiBtYWluLS13ZWxjb21lXCI+XG5cdDxzZWN0aW9uIGNsYXNzPVwibG9nb1wiIHRpdGxlPVwi0KPQs9Cw0LTQsNC5INC80LXQu9C+0LTQuNGOXCI+PGgxPtCj0LPQsNC00LDQuSDQvNC10LvQvtC00LjRjjwvaDE+PC9zZWN0aW9uPlxuXHQ8YnV0dG9uIGNsYXNzPVwibWFpbi1wbGF5XCI+0J3QsNGH0LDRgtGMINC40LPRgNGDPC9idXR0b24+XG5cdDxoMiBjbGFzcz1cInRpdGxlIG1haW4tdGl0bGVcIj7Qn9GA0LDQstC40LvQsCDQuNCz0YDRizwvaDI+XG5cdDxwIGNsYXNzPVwidGV4dCBtYWluLXRleHRcIj5cblx0ICDQn9GA0LDQstC40LvQsCDQv9GA0L7RgdGC0YsmbmJzcDvigJQg0LfQsCZuYnNwOzUg0LzQuNC90YPRgiDQvtGC0LLQtdGC0LjRgtGMINC90LAg0LLRgdC1INCy0L7Qv9GA0L7RgdGLLjxicj5cblx0ICDQntGI0LjQsdC40YLRjNGB0Y8g0LzQvtC20L3QviAzINGA0LDQt9CwLjxicj5cblx0ICDQo9C00LDRh9C4IVxuXHQ8L3A+XG4gPC9zZWN0aW9uPmApO1xuXG5leHBvcnQge3dlbGNvbWVTY3JlZW59O1xuXG4iLCJpbXBvcnQge2NoYW5nZVNjcmVlbn0gZnJvbSAnLi91dGlsLmpzJztcbmltcG9ydCB7d2VsY29tZVNjcmVlbn0gZnJvbSAnLi93ZWxjb21lLXNjcmVlbi5qcyc7XG5cbmNoYW5nZVNjcmVlbih3ZWxjb21lU2NyZWVuKTtcblxuLy8gY29uc3QgQVJST1dfUklHSFQgPSAzOTtcbi8vIGNvbnN0IEFSUk9XX0xFRlQgPSAzNztcbi8vIGNvbnN0IGFwcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcHAnKTtcbi8vIGNvbnN0IG1haW4gPSBhcHAucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbi8vIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXBsYXRlcycpLmNvbnRlbnQuY2hpbGRyZW47XG4vLyBjb25zdCB0ZW1wbGF0ZUFycmF5ID0gW107XG4vLyBsZXQgaW5kZXggPSAwO1xuXG4vLyBmb3IgKGxldCBpID0gMDsgaSA8IHRlbXBsYXRlLmxlbmd0aDsgaSsrKXtcbi8vIFx0dGVtcGxhdGVBcnJheS5wdXNoKHRlbXBsYXRlW2ldKTtcbi8vIH1cblxuLy8gY29uc3QgYXJyb3dzV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gYXJyb3dzV3JhcC5jbGFzc0xpc3QuYWRkKCdhcnJvd3NfX3dyYXAnKTtcbi8vIGFycm93c1dyYXAuaW5uZXJIVE1MID0gYDxzdHlsZT5cbi8vICAgLmFycm93c19fd3JhcCB7XG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgIHRvcDogMTM1cHg7XG4vLyAgICAgbGVmdDogNTAlO1xuLy8gICAgIG1hcmdpbi1sZWZ0OiAtNTZweDtcbi8vICAgfVxuLy8gICAuYXJyb3dzX19idG4ge1xuLy8gICAgIGJhY2tncm91bmQ6IG5vbmU7XG4vLyAgICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4vLyAgICAgcGFkZGluZzogNXB4IDIwcHg7XG4vLyAgIH1cbi8vIDwvc3R5bGU+XG4vLyA8YnV0dG9uIGNsYXNzPVwiYXJyb3dzX19idG5cIj48LTwvYnV0dG9uPlxuLy8gPGJ1dHRvbiBjbGFzcz1cImFycm93c19fYnRuXCI+LT48L2J1dHRvbj5gO1xuLy8gYXBwLmFwcGVuZENoaWxkKGFycm93c1dyYXApO1xuLy8gbWFpbi5hcHBlbmRDaGlsZCh0ZW1wbGF0ZUFycmF5W2luZGV4XSk7XG5cbi8vIGNvbnN0IGxlZnRBcnJvd0hhbmRsZXIgPSBmdW5jdGlvbigpe1xuLy8gXHRpbmRleCsrO1xuLy8gXHRpZiAoaW5kZXggPiB0ZW1wbGF0ZUFycmF5Lmxlbmd0aCAtIDEpe1xuLy8gXHRcdGluZGV4ID0gMDtcbi8vIFx0fVxuLy8gXHRtYWluLmlubmVySFRNTCA9IFwiXCI7XG4vLyBcdG1haW4uYXBwZW5kQ2hpbGQodGVtcGxhdGVBcnJheVtpbmRleF0pO1xuLy8gfTtcblxuLy8gY29uc3QgcmlnaHRBcnJvd0hhbmRsZXIgPSBmdW5jdGlvbigpe1xuLy8gXHRpbmRleC0tO1xuLy8gXHRpZiAoaW5kZXggPCAwKXtcbi8vIFx0XHRpbmRleCA9IHRlbXBsYXRlQXJyYXkubGVuZ3RoIC0gMTtcbi8vIFx0fVxuLy8gXHRtYWluLmlubmVySFRNTCA9IFwiXCI7XG4vLyBcdG1haW4uYXBwZW5kQ2hpbGQodGVtcGxhdGVBcnJheVtpbmRleF0pO1xuLy8gfTtcblxuLy8gY29uc3QgbGVmdEFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFycm93c19fYnRuJylbMF07XG4vLyBjb25zdCByaWdodEFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFycm93c19fYnRuJylbMV07XG5cbi8vIGxlZnRBcnJvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxlZnRBcnJvd0hhbmRsZXIpO1xuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uKGV2dCl7XG4vLyBcdGlmIChldnQua2V5Q29kZSA9PT0gQVJST1dfTEVGVCl7XG4vLyBcdFx0bGVmdEFycm93SGFuZGxlcigpO1xuLy8gXHR9XG4vLyB9KTtcbi8vIHJpZ2h0QXJyb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByaWdodEFycm93SGFuZGxlcik7XG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24oZXZ0KXtcbi8vIFx0aWYgKGV2dC5rZXlDb2RlID09PSBBUlJPV19SSUdIVCl7XG4vLyBcdFx0cmlnaHRBcnJvd0hhbmRsZXIoKTtcbi8vIFx0fVxuLy8gfSk7XG5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Q0FBTyxNQUFNLE1BQU0sR0FBRyxDQUFDLFFBQVEsS0FBSztDQUNwQyxDQUFDLE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7Q0FDM0MsQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztDQUNqQyxDQUFDLE9BQU8sR0FBRyxDQUFDO0NBQ1osQ0FBQyxDQUFDOztDQUVGLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7O0FBRTdDLENBQU8sTUFBTSxZQUFZLEdBQUcsQ0FBQyxPQUFPLEtBQUs7Q0FDekMsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDO0NBQ3JCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDekMsQ0FBQyxDQUFDOztDQ1ZGLE1BQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxDQUFDOzs7Ozs7Ozs7V0FTbkIsQ0FBQyxDQUFDLENBQUM7O0NDUGQsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDOztDQUU1QjtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTs7Q0FFQTtDQUNBO0NBQ0E7O0NBRUE7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7O0NBRUE7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTs7Q0FFQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBOztDQUVBO0NBQ0E7O0NBRUE7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBLE1BQU07Ozs7In0=
