function plusVal() {
	var inputValue = document.getElementById('input-value');
	inputValue.value = parseInt(inputValue.value) + 1;
}

var btnPlus = document.getElementById('btn-plus');
btnPlus.addEventListener('click', plusVal);



function minusVal() {
	var inputValue = document.getElementById('input-value');
	inputValue.value = parseInt(inputValue.value) - 1;

}

var btnMinus = document.getElementById('btn-minus');
btnMinus.addEventListener('click', minusVal);





