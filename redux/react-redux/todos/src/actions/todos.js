import API from "../utils/api";

export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

const addTodo = (name) => {
  return {
    type: ADD_TODO,
    todo: {
      id: generateId(),
      name: name,
      complete: false,
    },
  };
};
const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    id: id,
  };
};
const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id: id,
  };
};

// async actions/thunks
export function handleDeleteTodo() {}

export function handleAddTodo() {}

export function handleToggle() {}
