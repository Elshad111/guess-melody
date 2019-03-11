export const render = (template) => {
	const div = document.createElement('div');
	div.classList.add('main-section');
	div.innerHTML = template.trim();
	return div;
};

const main = document.querySelector('.main');

export const changeScreen = (element) => {
	main.innerHTML = ``;
	main.appendChild(element);
}; 
