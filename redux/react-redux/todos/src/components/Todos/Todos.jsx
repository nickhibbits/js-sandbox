import { connect } from "react-redux";
import { useRef } from "react";
import {
  handleAddTodo,
  handleDeleteTodo,
  handleToggleTodo,
} from "@/actions/todos";

import List from "@/components/List/List";

import "@/components/Todos/todos.scss";

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
      <div className="todos_wrapper ">
        <h1 className="flex flex_start">Todos</h1>
        <div className="add_todo_wrapper flex flex_space">
          <input
            className="input"
            type="text"
            placeholder="Add Todo"
            ref={todoInputRef}
          />
          <button className=".button" onClick={addItem}>
            Add Todo
          </button>
        </div>
        <List items={todos} removeItem={removeItem} toggleItem={toggleItem} />
      </div>
    </>
  );
}

export default connect((state) => ({
  todos: state.todos,
}))(Todos);
