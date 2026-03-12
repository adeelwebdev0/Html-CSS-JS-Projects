// ------------------TextArea------------------------
const textArea = document.querySelector("#textArea");
// -------------------Count--------------------------
const countText = document.querySelector(".txt-limiter");
// --------------------CharactersCounter-----------------
const charactersCount = document.querySelector(".counter");
// -------------------wordscount-------------------------
let wordCount = document.querySelector(".Counter");

// -------------------Count--------------------------
textArea.addEventListener("input", () => {
  countText.textContent = `${textArea.value.length}/500`;

  charactersCount.textContent = textArea.value.length;

  //   ---------------- here  "down"  i use some "gpt" 'Sorry for that because i didn't kmow the regular expression'------------------------
  let words = textArea.value.trim().split(/\s+/);

  let count = textArea.value.trim() === "" ? 0 : words.length;

  wordCount.textContent = count;
  // --------------------Even-------------------
});

// ------------------Clear---------------------
const clear = document.querySelector("#clear");

// ------------------Clear---------------------
clear.addEventListener("click", () => {
  textArea.value = "";
  countText.textContent = `${0}/500 `;
  charactersCount.textContent = textArea.value.length;
  let words = textArea.value.trim().split(/\s+/);
  let count = textArea.value.trim() === "" ? 0 : words.length;
  wordCount.textContent = count;
});
