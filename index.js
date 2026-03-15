<<<<<<< HEAD
const navbar = document.querySelector("#navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("sticky", "shadow", "blur");
  } else {
    navbar.classList.remove("sticky", "shadow", "blur");
  }
=======
const openButton = document.querySelector("#open-po");

const close = document.querySelector("#close");

const model = document.querySelector(".modal");

openButton.addEventListener("click", () => {
  model.classList.add("active");
});

close.addEventListener("click", () => {
  model.classList.remove("active");
>>>>>>> 3945c064fbfc5128c5f60cf864906340779a0e88
});
