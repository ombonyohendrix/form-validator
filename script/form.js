const form = document.getElementById("userForm");
form.addEventListener("submit", function (e) {
	e.preventDefault();
	validateForm();
});

function validateForm() {
	const userName = document.getElementById("username").value;
	const userEmail = document.getElementById("email").value;
	const userPassword = document.getElementById("password").value;
	const errorMessage = document.getElementById("error-message");
	// resetting the error message
	errorMessage.textContent = "";

	// validating username

	if (userName.length < 3 || userName === " ") {
		errorMessage.textContent += "username must be atleat 3 characters long";

		return;
	}
	// email validation.
	const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+[a-zA-Z]{2,6}&/;
	if (!emailPattern.test(email)) {
		errorMessage.textContent += "Please Enter correct Email.\n";
		return;
	}

	// password validation.

	if (userPassword.length < 4 || userPassword === " ") {
		errorMessage.textContent +=
			"Password must be atleast 4 characters and cannot be empty.\n";
		return;
	}
}
