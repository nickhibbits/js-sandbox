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
export function handleDeleteTodo(todo) {
  return (dispatch) => {
    dispatch(removeTodo(todo.id));
    return API.deleteTodo(todo.id).catch(() => {
      dispatch(addTodo(todo.name));
      alert("error deleting todo, please try again later");
    });
  };
}

export function handleAddTodo(name) {
  return (dispatch) => {
    return API.saveTodo(name)
      .then(() => {
        console.log("success", success);
        dispatch(addTodo(name));
      })
      .catch(() => {
        alert("error adding todo, try again");
      });
  };
}

export function handleToggle() {
  return (dispatch) => {
    return API.saveTodoToggle(id).catch(() => {
      dispatch(toggleTodo(id));
    });
  };
}
