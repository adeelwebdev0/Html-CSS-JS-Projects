const inputText = document.querySelector("#input-text");
const addTaskButton = document.querySelector(".task-btn");
const list = document.querySelector(".list");
addTaskButton.addEventListener("click", () => {
  if (!inputText.value) return;
  const li = document.createElement("li");
  li.textContent = inputText.value;
  list.appendChild(li);
  inputText.value = "";
  const deleteBTn = document.createElement("span");
  deleteBTn.textContent = "Delete";
  deleteBTn.classList.add("delete-btn");
  li.appendChild(deleteBTn);
  li.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("completed");
    } else if (e.target.tagName === "SPAN") {
      e.stopPropagation();
      e.target.parentElement.remove();
    }
  });
});
