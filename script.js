const todos = document.querySelectorAll(".todo");
const all_status = document.querySelectorAll(".status");
let draggableTodo = null;

todos.forEach((todo) => {
   todo.addEventListener("dragstart", dragStart);
   todo.addEventListener("dragend", dragEnd);
});

function dragStart(){
   draggableTodo = this;
   console.log("dragStart");
}

function dragEnd(){
   draggableTodo = null;
   console.log("dragEnd");
}

all_status.forEach((status) => {
   status.addEventListener("dragover", dragOver);
   status.addEventListener("dragenter", dragEnter);
   status.addEventListener("dragleave", dragLeave);    
   status.addEventListener("drop", dragDrop);
});

function dragOver(e){
   e.preventDefault();
  // console.log("dragOver");
}

function dragEnter(){
   this.style.border = "1px dashed #ccc";
   console.log("dragEnter");
}

function dragLeave(){
   this.style.border = "none";
   console.log("dragLeave");
}

function dragDrop(){
   this.style.border = "none";
   this.appendChild(draggableTodo);
   console.log("dropped");
}
    // makes lists editable
var divItems = document.querySelectorAll('.board .todo');

divItems.forEach(function(item) {
  item.addEventListener('click', function() {
    editDivItem(this);
  });
});

function editDivItem(item) {
  var li = item.querySelector('li');
  var text = li.innerText;

  var input = document.createElement('input');
  input.type = 'text';
  input.value = text;

  li.innerText = '';
  li.appendChild(input);

  input.focus();

  input.addEventListener('blur', function() {
    saveEditedDivItem(item, li, this.value);
  });
}

function saveEditedDivItem(item, li, newText) {
  li.innerText = newText;
  item.appendChild(li);
}
// Add List Item
function addItem(e) {
   e.preventDefault();
   const itemInput = document.getElementById("itemInput");
   const newItemText = itemInput.value;
   if (newItemText !== "") {
       const newListItem = document.createElement("div");
       newListItem.className = "todo";
       newListItem.draggable = true;
       newListItem.innerHTML = `
           <li>${newItemText}</li>
           <button class="delete-button"></button>
       `;
       const noStatusDiv = document.querySelector(".status:first-child");
       noStatusDiv.insertBefore(newListItem);
       itemInput.value = ""; // Clear input field
       // Attach event listeners to the new list item
       newListItem.addEventListener('dragstart', dragStart);
       newListItem.addEventListener('dragend', dragEnd);
       newListItem.addEventListener('click', function () {
           editDivItem(this);
       });
       const deleteButton = newListItem.querySelector(".delete-button");
       deleteButton.addEventListener('click', function () {
           deleteItem(this);
       });
   }
}
// Delete List Item
function deleteItem(deleteButton) {
   const listItem = deleteButton.parentNode;
   listItem.remove();
}
const addItemForm = document.getElementById("addItemForm");
addItemForm.addEventListener("submit", addItem);
