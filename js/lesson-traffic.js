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

var currentInterval = null;

// buttonStart.addEventListener("click", function() {setInterval(changeLight, 1000)});

buttonStart.addEventListener("click", function () {
	 	currentInterval = setInterval(changeLight, 1000);
});



buttonPause.addEventListener('click', function () {
	if (currentInterval !== null) {
		clearInterval(currentInterval);
		currentInterval = null;
	}
});
