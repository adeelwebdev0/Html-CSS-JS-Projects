const counting = document.querySelector("#counting");
const increment = document.querySelector("#increment");
const decrement = document.querySelector("#decrement");
const reset = document.querySelector("#reset");
let count = 0;

// -----------------Increment-------------------
increment.addEventListener("click", () => {
  count++;
  counting.innerText = count;
});
// ----------------Decrement---------------------
decrement.addEventListener("click", () => {
  if (count > 0) {
    count--;
    counting.innerText = count;
  }
});
// ----------------Reset---------------------------
reset.addEventListener("click", () => {
  count = 0;
  counting.innerText = count;
});
