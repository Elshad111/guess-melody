const ARROW_RIGHT = 39;
const ARROW_LEFT = 37;
const app = document.querySelector('.app');
const main = app.querySelector('.main');
const template = document.querySelector('#templates').content.children;
const templateArray = [];
let index = 0;

for (let i = 0; i < template.length; i++){
	templateArray.push(template[i]);
}

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
main.appendChild(templateArray[index]);

const leftArrowHandler = function(){
	index++;
	if (index > templateArray.length - 1){
		index = 0;
	}
	main.innerHTML = "";
	main.appendChild(templateArray[index]);
};

const rightArrowHandler = function(){
	index--;
	if (index < 0){
		index = templateArray.length - 1;
	}
	main.innerHTML = "";
	main.appendChild(templateArray[index]);
};

const leftArrow = document.querySelectorAll('.arrows__btn')[0];
const rightArrow = document.querySelectorAll('.arrows__btn')[1];

leftArrow.addEventListener('click', leftArrowHandler);
document.addEventListener('keydown', function(evt){
	if (evt.keyCode === ARROW_LEFT){
		leftArrowHandler();
	}
});
rightArrow.addEventListener('click', rightArrowHandler);
document.addEventListener('keydown', function(evt){
	if (evt.keyCode === ARROW_RIGHT){
		rightArrowHandler();
	}
});

