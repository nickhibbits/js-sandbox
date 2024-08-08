import { API } from "../utils/api";

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
export function handleDeleteTodo(todo) {
  return (dispatch) => {
    dispatch(removeTodo(todo.id));
    return API.deleteTodo(todo.id).catch(() => {
      dispatch(addTodo(todo.name));
      alert("error deleting todo, please try again later");
    });
  };
}

export function handleAddTodo(name, cb) {
  return (dispatch) => {
    return API.saveTodo(name)
      .then(() => {
        dispatch(addTodo(name));
        cb();
      })
      .catch(() => {
        alert("Error. Try again");
      });
  };
}

export function handleToggleTodo(id) {
  return (dispatch) => {
    dispatch(toggleTodo(id));

    return API.saveTodoToggle(id).catch(() => {
      dispatch(toggleTodo(id));
      alert("Error. Try again");
    });
  };
}
