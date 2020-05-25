var circles = document.querySelectorAll('.circle');
var arr = 0;


function changeLight() {
	circles[arr].className = 'circle';
	arr++;

	if(arr > 2) {
		arr = 0;
	}

	var currentLight = circles[arr];
	currentLight = currentLight.classList.add(currentLight.getAttribute('data'));
}

var buttonStart = document.querySelector('.start');
var buttonPause = document.querySelector('.pause');

buttonStart.addEventListener("click", function() {setInterval(changeLight, 2000)});
