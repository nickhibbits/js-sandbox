import { generateId } from ".";
import { combineReducers, connect } from "redux";

const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const ADD_GOAL = "ADD_GOAL";
const REMOVE_GOAL = "REMOVE_GOAL";

// action creators
const addTodoAction = (name) => {
  return {
    type: ADD_TODO,
    todo: {
      id: generateId(),
      name: name,
      complete: false,
    },
  };
};
const removeTodoAction = (id) => {
  return {
    type: REMOVE_TODO,
    id: id,
  };
};
const toggleTodoAction = (id) => {
  return {
    type: TOGGLE_TODO,
    id: id,
  };
};
const addGoalAction = (name) => {
  return {
    type: ADD_GOAL,
    goal: {
      id: null,
      name: name,
      complete: false,
    },
  };
};
const removeGoalAction = (id) => {
  return {
    type: REMOVE_GOAL,
    id: id,
  };
};

// middleware preventing user from adding todo or goal with the word bitcoin
const checker = (store) => (next) => (action) => {
  if (
    action.type === ADD_TODO &&
    action.todo.name.toLowerCase().includes("bitcoin")
  ) {
    return alert("no bitcoin todos");
  }

  if (
    action.type === ADD_GOAL &&
    action.goal.name.toLowerCase().includes("bitcoin")
  ) {
    return alert("no bitcoin goals");
  }

  next(action);
};

const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log("The action: ", action);
  const result = next(action);
  console.log("The new state: ", store.getState());
  console.groupEnd();
};

// Reducers
function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.todo];

    case REMOVE_TODO:
      return state.filter((todo) => {
        return todo.id !== action.id;
      });

    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id !== action.id) {
          return todo;
        } else {
          return { ...todo, complete: !todo.complete };
        }
      });
    default:
      return state;
  }
}

function goals(state = [], action) {
  switch (action.type) {
    case ADD_GOAL:
      return [...state, action.goal];

    case REMOVE_GOAL:
      return state.filter((goal) => {
        return goal.id !== action.id;
      });

    default:
      return state;
  }
}

export const store = Redux.createStore(
  combineReducers({
    todos,
    goals,
  }),
  Redux.applyMiddleware(checker, logger)
);

export {
  addTodoAction,
  removeTodoAction,
  addGoalAction,
  removeGoalAction,
  toggleTodoAction,
};
