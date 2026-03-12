const showPassword = document.querySelector("#showPassword");
const passwordInput = document.querySelector(".password");
showPassword.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    this.classList.toggle("fa-eye-slash");
  } else {
    passwordInput.type = "password";
    this.classList.remove("fa-eye-slash");
  }
});
