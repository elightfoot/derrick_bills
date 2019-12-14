const emptyCheck = document.querySelector("#items");
const newItemValue = document.querySelector(".form-control");
const addButton = document.querySelector(".btn");

addButton.onclick = e => {
  e.preventDefault();
  if (newItemValue.value === "") {
    const empty = document.querySelector("#empty");
    empty.textContent = "Must Enter an item name";
    newItemValue.focus();
  } else {
    empty.textContent = "";
    renderNewListItem();
  }
};

function renderNewListItem() {
  const listTitle = document.querySelector("#listTitle");
  const list = document.querySelector("#items");

  const deletebtn = document.createElement("button");
  const listItem = document.createElement("li");
  const span = document.createElement("span");

  deletebtn.textContent = "Delete";
  listItem.textContent = newItemValue.value;
  listItem.setAttribute(
    "class",
    "list-group-item d-flex justify-content-between"
  );
  deletebtn.setAttribute("class", "btn btn-dark");
  list.appendChild(listItem);
  listItem.appendChild(span);
  span.appendChild(deletebtn);

  if (emptyCheck.firstChild) {
    listTitle.textContent = "Here are your list items";
  } else listTitle.textContent = "";

  newItemValue.value = "";
  deletebtn.onclick = removeItems;
  function removeItems() {
    if (emptyCheck.firstChild) {
      listTitle.textContent = "";
    }
    list.removeChild(listItem);
  }
  let listbackground = document.querySelectorAll(
    ".list-group-item:nth-child(odd)"
  );
  listbackground.forEach(function(item) {
    item.style.backgroundColor = "#999";
    item.style.color = "fff";
  });
}
