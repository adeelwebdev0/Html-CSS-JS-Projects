const openButton = document.querySelector("#open-po");

const close = document.querySelector("#close");

const model = document.querySelector(".modal");

openButton.addEventListener("click", () => {
  model.classList.add("active");
});

close.addEventListener("click", () => {
  model.classList.remove("active");
});
