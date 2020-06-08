function validateform(e) {
  e.preventDefault();

	var name = document.getElementById('name').value;  
	var password = document.getElementById('password').value;
	var rpassword = document.getElementById('r-password').value;
	var email = document.getElementById('txtEmail').value;

	var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	var txtError = document.getElementById('error-popup');
  
	if (!name){
  		showErrorMessage('name_input');
	} 
  
  	if(password.length < 6) {
  		showErrorMessage('password_input');
  	}

  	if(password !== rpassword) {
  		showErrorMessage('rpassword_input');
  	}

  	if (!filter.test(email.value)) {
   		showErrorMessage('email_input');
  	}
}  

function showErrorMessage(inputClassName) {
  var errorMessage = document.getElementsByClassName(inputClassName)[0].getElementsByClassName('error_message')[0];
  errorMessage.setAttribute('class', 'error_message');
}

var form = document.getElementById('form');
form.addEventListener('submit', validateform);