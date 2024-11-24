const API_URL = "http://localhost:3000/todos"; // URL de la API

const todoList = document.getElementById("todo-list");
const newTodoInput = document.getElementById("new-todo");

// Renderizar las tareas desde la API
async function renderTodos() {
  todoList.innerHTML = ""; // Limpia la lista actual

  try {
    const response = await fetch(API_URL); // Solicitud GET para obtener las tareas
    const todos = await response.json();

    todos.forEach((todo) => {
      const todoItem = document.createElement("div");
      todoItem.className = "todo-item";

      const todoInput = document.createElement("input");
      todoInput.type = "text";
      todoInput.value = todo.text;
      todoInput.oninput = (e) => editTodo(todo.id, e.target.value);

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Eliminar";
      deleteBtn.onclick = () => deleteTodo(todo.id);

      todoItem.appendChild(todoInput);
      todoItem.appendChild(deleteBtn);

      todoList.appendChild(todoItem);
    });
  } catch (error) {
    console.error("Error al renderizar las tareas:", error);
  }
}

// Agregar una nueva tarea
async function addTodo() {
  const text = newTodoInput.value.trim();
  if (text) {
    try {
      await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }), // Crear tarea
      });
      newTodoInput.value = ""; // Limpia el campo
      renderTodos(); // Actualiza la lista
    } catch (error) {
      console.error("Error al agregar la tarea:", error);
    }
  }
}

// Editar una tarea existente
async function editTodo(id, newText) {
  try {
    await fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: newText }), // Actualizar tarea
    });
  } catch (error) {
    console.error("Error al editar la tarea:", error);
  }
}

// Eliminar una tarea
async function deleteTodo(id) {
  try {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    renderTodos(); // Actualiza la lista
  } catch (error) {
    console.error("Error al eliminar la tarea:", error);
  }
}

// Eliminar todas las tareas
async function clearTodos() {
  try {
    const response = await fetch(API_URL);
    const todos = await response.json();

    await Promise.all(
      todos.map((todo) =>
        fetch(`${API_URL}/${todo.id}`, {
          method: "DELETE",
        })
      )
    );

    renderTodos(); // Actualiza la lista
  } catch (error) {
    console.error("Error al eliminar todas las tareas:", error);
  }
}

// Inicializa la aplicación
renderTodos();
