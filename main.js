//Selctors
const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");

// Event Listener
todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo); //selector 2
//Functions
function addTodo(event) {
    event.preventDefault();
    //Todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //creat <li></li>
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //chek Mark <button></button>
    const btnCheck = document.createElement("button");
    btnCheck.innerHTML = '<i class="fa-solid fa-check"></i>'
    btnCheck.classList.add("check-btn");
    todoDiv.appendChild(btnCheck)

    //chek Trash <button></button>
    const btnTarsh = document.createElement("button");
    btnTarsh.innerHTML = '<i class="fa-solid fa-trash"></i>'
    btnTarsh.classList.add("trash-btn");
    todoDiv.appendChild(btnTarsh)
    //appand to List
    todoList.appendChild(todoDiv);


}



function deleteTodo(e) {
    let item = e.target;
    console.log(item);


    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        console.log(todo);
        todo.remove();
    }


    if (item.classList[0] === "check-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed")
    }
}