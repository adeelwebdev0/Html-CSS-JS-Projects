const inputText = document.querySelector(".text");

const nameError = document.querySelector("#name-error");

const email = document.querySelector("#email");

const emailError = document.querySelector("#email-error");

const submitButton = document.querySelector("#submit");

const succesMessage = document.querySelector("#successMessage");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  nameError.textContent = "";
  emailError.textContent = "";
  succesMessage.textContent = "";

  let valid = true;

  if (inputText.value.length < 3) {
    nameError.textContent = "Name must be at least 3 characters";
    valid = false;
  }

  if (!email.value.includes("@") || !email.value.includes(".")) {
    emailError.textContent = "Enter a valid email";
    valid = false;
  }

  if (valid) {
    succesMessage.textContent = "Form submitted successfully";
  }

  inputText.value = "";
  email.value = "";
});
