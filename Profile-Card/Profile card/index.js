const btn = document.getElementById("button");
btn.addEventListener("click", () => {
  btn.textContent =
    btn.textContent === "Following..." ? "Follow" : "Following...";
});
