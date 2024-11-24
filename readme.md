# Explicaciones

- Tipo: Array
  Descripción: Arreglo que almacena los objetos de las tareas. Cada objeto tiene una propiedad text que representa el contenido de la tarea.
``let todos = JSON.parse(localStorage.getItem("todos")) || [];``

- todoList

    Tipo: HTMLElement
    Descripción: Referencia al contenedor donde se mostrarán las tareas.

``const todoList = document.getElementById("todo-list");``

- newTodoInput

    Tipo: HTMLElement
    Descripción: Referencia al campo de entrada donde el usuario escribe una nueva tarea.
``const newTodoInput = document.getElementById("new-todo");``


## FUNCIONES

- renderTodos()

    Descripción: Renderiza la lista de tareas en el DOM y actualiza el localStorage.
    Pasos:
    Limpia el contenedor de tareas (todoList.innerHTML = "").
    Recorre el arreglo todos y crea dinámicamente elementos HTML para cada tarea.
    Guarda el estado actual de todos en localStorage.

-addTodo()

    Descripción: Agrega una nueva tarea al arreglo todos y la renderiza.
    Pasos:
    Obtiene el texto del campo newTodoInput.
    Verifica que no esté vacío (trim()).
    Agrega un objeto con la tarea al arreglo todos.
    Limpia el campo de entrada y llama a renderTodos().


### 1
Al cargar la página, se ejecuta renderTodos() para mostrar las tareas almacenadas en el localStorage.

### 2
El usuario escribe en el campo de entrada y presiona "Agregar". Esto llama a addTodo() para actualizar la lista.

### 3
El usuario modifica el texto directamente en la tarjeta, lo que dispara editTodo() para guardar el cambio.

### 4
El usuario presiona el botón "Eliminar" junto a una tarjeta, llamando a deleteTodo() para quitarla.

### 5
El usuario presiona el botón "Eliminar Todos", activando clearTodos() para reiniciar la lista.

# JSON
- Lista de tareas: http://localhost:3000/todos
    Puedes ver y manipular las tareas agregadas, editadas o eliminadas.

- Agrega tareas: Introduce texto en el campo de entrada y haz clic en        "Agregar". Esto realizará una solicitud POST a http://localhost:3000/todos y la     tarea se guardará en el archivo db.json.    

## db.json
- Este archivo almacenará las tareas. Su estructura inicial será algo como esto:
json
``
{
  "todos": []
}
``
3. Actualizar el código de tu aplicación para usar la API:
Cambia las funciones de la aplicación para que interactúen con la API en lugar de usar localStorage.

- Agregar tareas: Se envía una solicitud POST a la API.
    Editar tareas: Se envía una solicitud PUT a la API.
    Eliminar tareas: Se envía una solicitud DELETE a la API.
    Eliminar todas las tareas: Se envía una solicitud DELETE a la API para limpiar la lista de tareas.
