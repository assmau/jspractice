var slideIndex = 1;

function showSlides(n) {
    var listSlider = document.getElementsByClassName("item");
    if (n > listSlider.length) {
      slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = listSlider.length;
    }
    for (var i = 0; i < listSlider.length; i++) {
        listSlider[i].style.display = "none";
    }

    listSlider[slideIndex - 1].style.display = "block";
}

showSlides(slideIndex);


function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);  
}


var goNext = document.querySelector('.next');
goNext.addEventListener('click', plusSlide);


var goPrev = document.querySelector('.prev');
goPrev.addEventListener('click', minusSlide);