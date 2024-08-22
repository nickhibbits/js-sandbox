import { connect } from "react-redux";
import {
  handleAddTodo,
  handleDeleteTodo,
  handleToggleTodo,
} from "@/actions/todos";

import List from "../List/List";
import { useRef } from "react";

function Todos(props) {
  const todoInputRef = useRef(null);

  const { todos, dispatch } = props;
  console.log("todos", todos);

  const addItem = (e) => {
    e.preventDefault();
    const name = todoInputRef.current.value;

    dispatch(handleAddTodo(name, () => (todoInputRef.current.value = "")));
  };

  const removeItem = (todo) => {
    dispatch(handleDeleteTodo(todo));
  };

  const toggleItem = (id) => {
    dispatch(handleToggleTodo(id));
  };

  return (
    <>
      <div>
        <h1>Todos</h1>
        <input type="text" placeholder="Add Todo" ref={todoInputRef} />
        <button onClick={addItem}>Add Todo</button>
        <List items={todos} removeItem={removeItem} toggleItem={toggleItem} />
      </div>
    </>
  );
}

export default connect((state) => ({
  todos: state.todos,
}))(Todos);
