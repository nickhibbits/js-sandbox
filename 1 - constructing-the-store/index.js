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

// APP CODE

// actions
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
      id: null,
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

// todos reducer
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

// goals reducer
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

    // all reducers are invoked with each action that occurs
    // when an action occurs in one reducer but not another, we need to return the uneffected portions of the state tree as they are
    default:
      return state;
  }
}

// initialize with an empty object to avoid iterating over undefined
// combine reducers into a single object to isolate the different pieces of state that are related to each other
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

store.dispatch(addGoalAction("train dogs"));
store.dispatch(addTodoAction("walk dogs"));
store.dispatch(addTodoAction("teach dogs new trick"));
