const input = document.querySelector("#input");
const button = document.querySelector("#btn");
const ul = document.querySelector("ul");

window.addEventListener("DOMContentLoaded", () => {
  const savedItems = JSON.parse(localStorage.getItem("todoList")) || [];
  savedItems.forEach(item => addItemToList(item));
});

button.addEventListener("click", () => {
  const value = input.value.trim();

  if (!value) {
    alert("Value required");
    return;
  }

  addItemToList(value);
  saveItem(value);
  input.value = "";
});

function addItemToList(value) {
  const li = document.createElement("li");
  li.innerHTML = `${value} <button class="delete-btn">Delete</button>`;
  ul.appendChild(li);

  const delBtn = li.querySelector(".delete-btn");
  delBtn.addEventListener("click", () => {
    li.remove();
    removeItem(value);
  });
}

function saveItem(value) {
  const items = JSON.parse(localStorage.getItem("todoList")) || [];
  items.push(value);
  localStorage.setItem("todoList", JSON.stringify(items));
}

function removeItem(value) {
  let items = JSON.parse(localStorage.getItem("todoList")) || [];
  items = items.filter(item => item !== value);
  localStorage.setItem("todoList", JSON.stringify(items));
}
