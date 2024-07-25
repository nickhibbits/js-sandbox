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
