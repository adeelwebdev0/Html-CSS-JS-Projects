const nmbGnt = document.querySelector("#generate-button");
const minInput = document.querySelector(".min-number");
const maxInput = document.querySelector(".max-number");
const display = document.querySelector("#rnd-display");

nmbGnt.addEventListener("click", () => {
  const min = Number(minInput.value);
  const max = Number(maxInput.value);

  if (min > max) {
    display.textContent = "Invalid";
    return;
  }
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  display.textContent = randomNumber;
});
