export default function goals(state = [], action) {
  switch (action.type) {
    case ADD_GOAL:
      return [...state, action.goal];

    case REMOVE_GOAL:
      return state.filter((goal) => {
        return goal.id !== action.id;
      });

    case RECEIVE_DATA:
      return action.goals;

    default:
      return state;
  }
}
