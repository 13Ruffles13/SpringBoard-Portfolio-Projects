/*
    1) TODO: Part 1
        For this assignment you will be combining your knowledge of DOM access and 
        events to build a todo app!

        As a user, you should be able to:

        - Add a new todo (by submitting a form) [x]
        - Mark a todo as completed (cross out the text of the todo) [x]
        - Remove a todo [x]
    
    2) TODO: Part 2
        Now that you have a functioning todo app, save your todos 
        in localStorage! Make sure that when the page refreshes, the todos 
        on the page remain there. [x]
*/

//Query selectors
const getTodoVal = document.querySelector("#newTodo");
const liLocator = document.querySelector("#todos");

//LOCAL STORAGE
const saved = localStorage.getItem("addElement");
if (saved) {
  liLocator.innerHTML = saved;
}

//EVENTS
const btnSubmit = document.querySelector("#addTODO");
let findButton;
let changeText;
let findClosetLi;

btnSubmit.addEventListener("click", function (e) {
  e.preventDefault(); //Do not go to another domain
  //ELEMENTS
  const addElement = document.createElement("li");
  const removeLiBtn = document.createElement("button");
  const addInputType = document.createElement("input");
  addInputType.type = "checkbox";
  addInputType.id = "checkMark";
  //SetValues
  removeLiBtn.innerHTML = "Remove";
  addElement.innerHTML = getTodoVal.value;
  addElement.append(addInputType, removeLiBtn);
  liLocator.append(addElement);
  getTodoVal.value = "";

  findButton = document.querySelectorAll("#todos button");
  for (let i = 0; i < findButton.length; i++) {
    findButton[i].addEventListener("click", function (e) {
      findClosetLi = e.target.closest(`li`);
      findClosetLi.remove();
    });
  }

  //LOCAL STORAGE
  localStorage.setItem("addElement", liLocator.innerHTML);
});

liLocator.addEventListener("change", function (e) {
  changeText = e.target.closest(`li`);
  if (changeText.style.textDecoration === "line-through") {
    changeText.style.textDecoration = "";
  } else {
    changeText.style.textDecoration = "line-through";
  }
});
