const addTodoAction = {
  type: "ADD_TODO",
  todo: {
    id: null,
    name: "Learn Redux",
    complete: false,
  },
};

const removeTodoAction = {
  type: "REMOVE_TODO",
};
const updateTodoAction = {
  type: "UPDATE_TODO",
};

const addGoalAction = {
  type: "ADD_GOAL",
};
const removeGoalAction = {
  type: "REMOVE_GOAL",
};

function todos(state = [], action) {
  if (action.type === "ADD_TODO") {
    if (!state.length < 1) {
      action.todo.id = 1;
    } else {
      action.todo.id = state.length + 1;
    }
    return [...state, action.todo];
  }

  if (action.type === "REMOVE_TODO") {
    return state.filter((todo) => {
      todo.id !== action.id;
    });
  }

  if (action.type === "UPDATE_TODO") {
    return state.todos.map((todo) => {
      if (todo.id !== action.todo.id) return;
      return (todo = action.todo);
    });
  }
}

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
    state = reducer(state, action);
    console.log("dispatch");
    listeners.forEach((listener) => listener());
  };

  return {
    getState,
    subscribe,
    dispatch,
  };
}

const store = createStore(todos);

const unsubscribe = store.subscribe(() => {
  console.log("The new state is", store.getState());
});

store.dispatch(addTodoAction);
console.log(store.getState());
