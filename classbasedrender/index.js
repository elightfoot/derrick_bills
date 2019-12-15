const addbutton = document.querySelector(".addButton");
var input = document.querySelector(".input");
const container = document.querySelector(".container");

class item {
  constructor(itemName) {
    this.createDiv(itemName);
  }
  createDiv(itemName) {
    let input = document.createElement("input");
    input.value = itemName;
    input.disabled = true;
    input.classList.add("item_input");
    input.type = "text";

    let itemBox = document.createElement("div");
    itemBox.classList.add("item");

    let editButton = document.createElement("button");
    editButton.className = "editButton fa fa-pencil-square-o fa-1x";
    let removeButton = document.createElement("button");
    removeButton.className = "removeButton fa fa-minus";

    container.appendChild(itemBox);

    itemBox.appendChild(input);
    itemBox.appendChild(editButton);
    itemBox.appendChild(removeButton);

    editButton.addEventListener("click", () => this.edit(input));
    removeButton.addEventListener("click", () => this.remove(itemBox));
    removeButton.addEventListener("click", () => this.remove(itemBox));
  }
  edit(input) {
    input.disabled = !input.disabled;
  }
  remove(item) {
    container.removeChild(item);
  }
}

function check() {
  if (input.value != "") {
    new item(input.value);
    input.value = "";
  }
}
addbutton.addEventListener("click", check);
window.addEventListener("keydown", e => {
  if (e.which == 13) {
    check();
  }
});
