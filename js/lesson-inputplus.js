function plusVal() {
	var inputValue = document.getElementById('input-value');
	var currentPlus = parseInt(inputValue.value);

	if(currentPlus < 10) {
		inputValue.value = currentPlus + 1;
	}
}

var btnPlus = document.getElementById('btn-plus');
btnPlus.addEventListener('click', plusVal);



function minusVal() {
	var inputValue = document.getElementById('input-value');
	var currentValue = parseInt(inputValue.value);

	if(currentValue > 0) {
		inputValue.value = currentValue -1;
	}

}

var btnMinus = document.getElementById('btn-minus');
btnMinus.addEventListener('click', minusVal);





