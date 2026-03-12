const red = document.querySelector("#red");
const green = document.querySelector("#green");
const blue = document.querySelector("#blue");
const yellow = document.querySelector("#yellow");
const reset = document.querySelector("#reset");

// ---------------RED----------------------------
red.addEventListener("click", () => {
  document.body.style.backgroundColor = "red";
});

// ------------------GREEN-----------------------
green.addEventListener("click", () => {
  document.body.style.backgroundColor = "green";
});

// -----------------BLUE-------------------------
blue.addEventListener("click", () => {
  document.body.style.backgroundColor = "blue";
});

// ----------------YELLOW-------------------------
yellow.addEventListener("click", () => {
  document.body.style.backgroundColor = "yellow";
});

// ----------------RESET--------------------------
reset.addEventListener("click", () => {
  document.body.style.backgroundColor = "";
});
