import React, { useRef } from "react";
import { generateId } from "../../utils";
import List from "../List";

function TodosContainer(store) {
  const todoInputRef = useRef("");

  const { todos, dispatch } = store;

  const handleClick = (e) => {
    e.preventDefault();
    const name = todoInputRef.current.value;
    todoInputRef.current.value = "";

    dispatch(
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
        <List items={todos} removeItem={() => dispatch(removeTodoAction)} />
      </div>
    </>
  );
}

export default TodosContainer;
