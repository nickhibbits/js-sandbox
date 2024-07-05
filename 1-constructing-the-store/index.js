const addTodoAction = {
  type: "ADD_TODO",
  todo: {
    id: Math.floor(Math.random(100)),
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
  const { todos, goals } = state;

  if (action.type === "ADD_TODO") {
    return {
      ...state,
      todos: [...state.todos, action.todo],
    };
  }
  if (action.type === "REMOVE_TODO") {
    return {
      ...state,
      todos: todos.filter((todo) => {
        todo.id !== action.id;
      }),
    };
  }
  if (action.type === "UPDATE_TODO") {
    return {
      ...state,
      todos: todos.map((todo) => {
        if (todo.id !== action.todo.id) return;
        return (todo = action.todo);
      }),
    };
  }
  if (action.type === "ADD_GOAL") {
    return {
      ...state,
      goals: [...goals, action.goal],
    };
  }
  if (action.type === "REMOVE_GOAL") {
    return {
      ...state,
      goals: goals.filter((goal) => {
        goal.id !== action.id;
      }),
    };
  }
}

function createStore() {
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
    state = todos(state, action);
    listeners.forEach((listener) => listener());
  };

  return {
    getState,
    subscribe,
    dispatch,
  };
}

const store = createStore();
const unsubscribe = store.subscribe(() => {
  console.log("The new state is", store.getState());
});
store.dispatch(addTodoAction);
