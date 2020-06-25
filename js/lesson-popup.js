var popup = document.querySelector('.popup');
var clickButton = document.querySelector('button');
var closePopup = document.querySelector('.close');

function buttonToggle() {
	popup.classList.add('active');
}
clickButton.addEventListener('click', buttonToggle);


function close() {
	popup.classList.remove('active');
}
closePopup.addEventListener('click', close);



// При клике на любое пространства, кроме popup должно закрыться. Почему не работает этот скрипт не пойму ?? =( 
window.onclick = function(e) {
	if(e.target == popup) {
		popup.classList.remove('active');
	}
}