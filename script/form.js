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

	if (userName.length < 3) {
		errorMessage.textContent += "username must be atleat 3 characters long";

		return;
	}
}
