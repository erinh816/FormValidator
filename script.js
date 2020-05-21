// Approach 1:simple way to do it is some if statements to check the errors
// Approach 2:refacter to make it much cleaner so that if we have more fields, we don't have to keep adding if statements

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input, message) {
	const formControl = input.parentElement;
	// parentElement of input is form-control div
	formControl.className = 'form-control error';
	const small = formControl.querySelector('small');
	//querySelector can take a tag, a class, a id
	small.innerText = message;
}

function showSuccess(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

//Validate email format
function isValidEmail(email) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

//Event Listeners
form.addEventListener('submit', function(e) {
	e.preventDefault();
	//prevent it from actually submitting
	// console.log(username.value);
	if (username.value === '') {
		// alert('Username is required');
		showError(username, 'Username is required');
	} else {
		showSuccess(username);
	}

	if (email.value === '') {
		showError(email, 'Email is required');
	} else if (!isValidEmail(email.value)) {
		showError(email, 'Email is not valid');
	} else {
		showSuccess(email);
	}

	if (password.value === '') {
		showError(password, 'Password is required');
	} else {
		showSuccess(password);
	}

	if (password2.value === '') {
		showError(password2, 'Password is required');
	} else {
		showSuccess(password2);
	}
});
