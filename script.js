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
// function isValidEmail(email) {
// 	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// 	return re.test(String(email).toLowerCase());
// }

function checkEmail(input) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (re.test(input.value.trim())) {
		showSuccess(input);
	} else {
		showError(input, 'Email is not valid');
	}
}
// The test() method executes a search for a match between a regular expression and a specified string. Returns true or false.

//Check required field
function checkRequired(inputArr) {
	inputArr.forEach(function(input) {
		// console.log(input.value);
		if (input.value.trim() === '') {
			console.log(input.id);
			showError(input, `${getFieldName(input)} is required`);
		} else {
			showSuccess(input);
		}
	});
}

//Check input length
function checkLength(input, min, max) {
	if (input.value.length < min) {
		showError(input, `${getFieldName(input)} must be at least ${min} characters`);
	} else if (input.value.length > max) {
		showError(input, `${getFieldName(input)} must be less than ${max} characters`);
	} else {
		showSuccess(input);
	}
}

//Check password match
function checkPasswordsMatch(input1, input2) {
	if (input1.value !== input2.value) {
		showError(input2, 'Passwords do not match');
	}
}

//Get fieldname (error message first letter capital)
function getFieldName(input) {
	return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

form.addEventListener('submit', function(e) {
	e.preventDefault();

	// checkRequired(username);
	// checkRequired(email);
	// checkRequired(password);
	// checkRequired(password2);
	checkRequired([ username, email, password, password2 ]);
	checkLength(username, 3, 15);
	checkLength(password, 6, 25);
	checkEmail(email);
	checkPasswordsMatch(password, password2);
});

//Event Listeners
// form.addEventListener('submit', function(e) {
// 	e.preventDefault();
// 	//prevent it from actually submitting
// 	// console.log(username.value);
// 	if (username.value === '') {
// 		// alert('Username is required');
// 		showError(username, 'Username is required');
// 	} else {
// 		showSuccess(username);
// 	}

// 	if (email.value === '') {
// 		showError(email, 'Email is required');
// 	} else if (!isValidEmail(email.value)) {
// 		showError(email, 'Email is not valid');
// 	} else {
// 		showSuccess(email);
// 	}

// 	if (password.value === '') {
// 		showError(password, 'Password is required');
// 	} else {
// 		showSuccess(password);
// 	}

// 	if (password2.value === '') {
// 		showError(password2, 'Password is required');
// 	} else {
// 		showSuccess(password2);
// 	}
// });
