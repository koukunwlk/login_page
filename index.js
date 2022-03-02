let eyeButton = document.querySelector(".eye-pwd");
let passwordInput = document.getElementById("password");
eyeButton.addEventListener("click", () => {
	passwordInput.classList.toggle("show");
	showPassword();
})
function showPassword(){
	if(passwordInput.classList.contains("show"))
		passwordInput.setAttribute("type", "text")
	else
		passwordInput.setAttribute("type", "password")
}