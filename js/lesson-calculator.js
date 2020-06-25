function plus() {
  var glass1 = document.getElementById('glass1').value;
  var glass2 = document.getElementById('glass2').value;

  var answer = document.getElementById('answer');
  var result;
 
  glass1 = parseInt(glass1);
  glass2 = parseInt(glass2);
  
  result = glass1 + glass2;

  answer.innerHTML = result;
}

var buttonPlus = document.getElementById('plus');
buttonPlus.addEventListener('click', plus);


// Minus

function minus() {
  var glass1 = document.getElementById('glass1').value;
  var glass2 = document.getElementById('glass2').value;

  var answer = document.getElementById('answer');
  var result;
 
  glass1 = parseInt(glass1);
  glass2 = parseInt(glass2);
  
  result = glass1 - glass2;

  answer.innerHTML = result;
}

var buttonMinus = document.getElementById('minus');
buttonMinus.addEventListener('click', minus);
