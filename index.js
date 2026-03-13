const navbar = document.querySelector("#navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("sticky", "shadow", "blur");
  } else {
    navbar.classList.remove("sticky", "shadow", "blur");
  }
});
