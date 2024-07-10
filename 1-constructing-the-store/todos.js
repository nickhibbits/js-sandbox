// LIBRARY CODE
function createStore(reducer) {
  // store should have 4 parts
  // 1. The state
  // 2. Get the state -- getState()
  // 3. Listen to state changes -- subscribe()
  // 4. Update the state

  let state;
  let listeners = [];

  const getState = () => state;

  const subscribe = (listener) => {
    // each time subscribe is invoked, the cb passed to it is stored in our listeners array.
    listeners.push(listener);

    // if user calls this function, returned to them wherever they invoked subscribe, it's removed from our listeners array.
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  };

  const dispatch = (action) => {
    // state = reducer(state, action);
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };

  return {
    getState,
    subscribe,
    dispatch,
  };
}

//APP CODE
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const ADD_GOAL = "ADD_GOAL";
const REMOVE_GOAL = "REMOVE_GOAL";

const addTodoActionCreator = (name) => {
  const addTodoAction = {
    type: ADD_TODO,
    todo: {
      id: null,
      name: name,
      complete: false,
    },
  };

  return addTodoAction;
};

const removeTodoActionCreator = (id) => {
  const removeTodoAction = {
    type: REMOVE_TODO,
    id: id,
  };

  return removeTodoAction;
};
const toggleTodoActionCreator = (id) => {
  const toggleTodoAction = {
    type: TOGGLE_TODO,
    id: id,
  };

  return toggleTodoAction;
};

const addGoalActionCreator = (name) => {
  const addGoalAction = {
    type: ADD_GOAL,
    goal: {
      id: null,
      name: name,
      complete: false,
    },
  };

  return addGoalAction;
};

const removeGoalActionCreator = (id) => {
  const removeGoalAction = {
    type: REMOVE_GOAL,
    id: id,
  };

  return removeGoalAction;
};

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      let newId;
      if (state.length === 0) {
        newId = 1;
      } else {
        newId = state.length + 1;
      }
      return [...state, { ...action.todo, id: newId }];

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
      let newId;
      if (state.length === 0) {
        newId = 1;
      } else {
        newId = state.length + 1;
      }
      return [...state, { ...action.goal, id: newId }];

    case REMOVE_GOAL:
      return state.filter((goal) => {
        return goal.id !== action.id;
      });

    default:
      return state;
  }
}

function combineReducers(state = {}, action) {
  return {
    todos: todos(state.todos, action),
    goals: goals(state.goals, action),
  };
}

const store = createStore(combineReducers);

const unsubscribe = store.subscribe(() => {
  console.log("The new state is", store.getState());
});

store.dispatch(addGoalActionCreator("train dogs"));
store.dispatch(addTodoActionCreator("walk dogs"));
store.dispatch(addTodoActionCreator("teach dogs new trick"));
