const addItem = () => {
  let newListItem = document.createElement("div");
  newListItem.classList.add("grid-item");

  let input = document.getElementById("input");
  if (input.value.trim() === "") {
    return;
  };

  newListItem.innerHTML = input.value;

  let list = document.getElementById("list");
  list.appendChild(newListItem);
  input.value = "";
};

/* const removeAllItems = () => {
  const allChildren = [...list.children];
  allChildren.forEach((child) => {
    list.removeChild(child);
  });
}; */

const removeAllItems = () => {
  list.innerHTML = "";
};

let input = document.getElementById("input");
input.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    addItem();
  };
});