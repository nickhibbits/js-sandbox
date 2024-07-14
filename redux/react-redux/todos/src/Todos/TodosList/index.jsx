import React, { useRef } from "react";
import { generateId } from "../../utils";

function TodosList(store) {
  const todoInputRef = useRef("");

  const handleClick = (e) => {
    e.preventDefault();
    const name = todoInputRef.current.value;
    todoInputRef.current.value = "";

    store.dispatch(
      addTodoAction({
        id: generateId(),
        name,
        complete: false,
      })
    );
  };

  return (
    <>
      <div>
        <h1>Todos</h1>
        <input type="text" placeholder="Add Todo" ref={todoInputRef} />
        <button onClick={handleClick}>Add Todo</button>
        <ul id="todos"></ul>
      </div>
    </>
  );
}

export default TodosList;
