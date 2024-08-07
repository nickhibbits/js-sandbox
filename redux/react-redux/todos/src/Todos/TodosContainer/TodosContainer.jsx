import React, { useRef } from "react";

import List from "../List";
import { API } from "../../utils/api";

function TodosContainer(store) {
  const todoInputRef = useRef("");

  const { todos, dispatch } = store;

  const handleAddTodoClick = (e) => {
    e.preventDefault();
    const name = todoInputRef.current.value;
    todoInputRef.current.value = "";

    dispatch(addTodo());
  };

  const handleRemoveTodoClick = (todo) => {
    dispatch(removeTodo(todo.id));

    API.deleteTodo(id).catch(() => {
      dispatch(addTodo(todo.name));
      alert("error deleting todo, please try again later");
    });
  };

  return (
    <>
      <div>
        <h1>Todos</h1>
        <input type="text" placeholder="Add Todo" ref={todoInputRef} />
        <button onClick={handleAddTodoClick}>Add Todo</button>
        <List items={todos} removeItem={handleRemoveTodoClick} />
      </div>
    </>
  );
}

const ConnectedTodosContainer = connect((state) => ({
  todos: state.todos,
}))(TodosContainer);

export default ConnectedTodosContainer;
