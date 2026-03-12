// IT cleat the submit text
const clear = document.querySelector("#clear-text");
// IT it gives the gree ting texttext
const submit = document.querySelector("#submitt-btn");
const greetings = document.querySelector("#greetings");
const cleargreet = document.querySelector("#clear-greet");

clear.addEventListener("click", () => {
  Textinput.value = "";
});
// -------------------SUbmit-----------------
submit.addEventListener("click", () => {
  greetings.textContent = `Hello 👋,${Textinput.value}`;
});
cleargreet.addEventListener("click", () => {
  greetings.textContent = "";
});
submit.addEventListener("click", () => {
  if (Textinput.value.trim() === "") {
    alert("Enter your name");
    return;
  }
});
