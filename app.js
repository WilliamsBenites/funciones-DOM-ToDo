
let todos = JSON.parse(localStorage.getItem("todos")) || [];


const todoList = document.getElementById("todo-list");
const newTodoInput = document.getElementById("new-todo");


function renderTodos() {
  todoList.innerHTML = ""; 
  todos.forEach((todo, index) => {
    const todoItem = document.createElement("div");
    todoItem.className = "todo-item";

    
    const todoInput = document.createElement("input");
    todoInput.type = "text";
    todoInput.value = todo.text;
    todoInput.oninput = (e) => editTodo(index, e.target.value);

    
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Eliminar";
    deleteBtn.onclick = () => deleteTodo(index);

    todoItem.appendChild(todoInput);
    todoItem.appendChild(deleteBtn);

    todoList.appendChild(todoItem);
  });

  localStorage.setItem("todos", JSON.stringify(todos)); 
}


function addTodo() {
  const text = newTodoInput.value.trim();
  if (text) {
    todos.push({ text });
    newTodoInput.value = "";
    renderTodos();
  }
}


function editTodo(index, newText) {
  todos[index].text = newText;
  localStorage.setItem("todos", JSON.stringify(todos)); 
}


function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}


function clearTodos() {
  todos = [];
  renderTodos();
}


renderTodos();
