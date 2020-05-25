var circles = document.querySelectorAll('.circle');
var arr = 0;  // Массив (отсчет)

function changeLight() {
  circles[arr].className = 'circle'; // className перезаписывает класс ((текущий удаляет) добавляет новый назначеный класс)
  arr++;

  if(arr > 2) { // Если Массив больше 2 (в программировагии отчет начиаеться всегда с нулья),
    arr = 0;   //  то (присваиваем 0) отчет начинает от 0 
  }

  var currentLight = circles[arr]; // Присваеваем новому переменному
  currentLight = currentLight.classList.add(currentLight.getAttribute('data')); // currentLight - у присваиваем как класс с атрибута data (а у атрибута data в html разметке)
}


setInterval(changeLight, 1000);