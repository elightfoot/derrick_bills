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
  const input = document.createElement("input");
  const span = document.createElement("span");
  const editbtn = document.createElement("button");

  input.textContent = newItemValue.value;
  deletebtn.textContent = "Delete";
  editbtn.textContent = "Edit";

  listItem.textContent = newItemValue.value;
  listItem.setAttribute(
    "class",
    "list-group-item d-flex justify-content-between"
  );
  input.textContent = newItemValue.value;
  deletebtn.setAttribute("class", "btn btn-danger");
  editbtn.setAttribute("class", "btn btn-success");
  editbtn.classList.add("edit");
  input.innerHTML = newItemValue.value;

  list.appendChild(listItem);
  listItem.appendChild(input);
  listItem.appendChild(span);
  span.appendChild(editbtn);

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

  editbtn.onclick = function() {
    listItem.textContent = "test";
  };
}
let testlist = document.querySelector("#items");
testlist.parentNode.style.backgroundColor = "#f4f4f4";
