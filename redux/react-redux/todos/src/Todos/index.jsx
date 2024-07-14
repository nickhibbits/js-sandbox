import React from "react";
import TodosList from "./TodosList";
import GoalsList from "./GoalsList";

function Todos(store) {
  return (
    <>
      <TodosList store={store} />
      <GoalsList store={store} />
    </>
  );
}

export default Todos;
