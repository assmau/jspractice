function validateform() {

	var name = document.getElementById('name').value;  
	var password = document.getElementById('password').value;
	var rpassword = document.getElementById('r-password').value;
	var email = document.getElementById('txtEmail').value;

	var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	var txtError = document.getElementById('error-popup');
  
	if (name==null || name==""){
  		txtError.innerHTML = "Имя пустая";
  		txtError.style.color = 'red';
	}
  
  	else if(password.length < 6) {
  		txtError.innerHTML = "Пароль не должен быть менше 6 символов";
  		txtError.style.color = 'red';
  	}

  	else if(password !== rpassword) {
  		txtError.innerHTML = "Пароли не совпадают";
  		txtError.style.color = 'red';
  	}

  	else if (!filter.test(email.value)) {
   		txtError.innerHTML = "Пожалуйста, укажите действующий адрес электронной почты";
   		txtError.style.color = 'red';
  	}
}  

var button = document.getElementById('btn');
button.addEventListener('click', validateform);