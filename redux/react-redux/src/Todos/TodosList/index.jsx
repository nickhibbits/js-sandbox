import React from "react";

function TodosList() {
  return (
    <>
      <div class="todos">
        <h1>Todos</h1>
        <input type="text" id="todoInput" placeholder="Add Todo" />
        <button>Add Todo</button>
        <ul id="todos"></ul>
      </div>
    </>
  );
}

export default TodosList;
