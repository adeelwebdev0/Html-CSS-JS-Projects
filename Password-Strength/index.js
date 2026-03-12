const submitButton = document.querySelector("#submit-btn");

const passWord = document.querySelector("#password");

const strengthBar = document.querySelector(".strength-bar");

const successMessage = document.querySelector(".success");

submitButton.addEventListener("click", () => {
  let password = passWord.value;

  let width = 0;

  if (password.length === 0) width = 0;
  else if (password.length < 3) width = 30;
  else if (password.length < 5) width = 50;
  else if (password.length < 8) width = 80;
  else width = 100;

  strengthBar.style.width = width + "%";
});
