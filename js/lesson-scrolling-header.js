function scrolling() {
	if(document.documentElement.scrollTop > 0) {
		document.querySelector('.header').classList.add('scrolling');
	}
	else {
		document.querySelector('.header').classList.remove('scrolling');
	}
}

window.onscroll = function() {
	scrolling();
}