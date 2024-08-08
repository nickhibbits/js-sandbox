import { API } from "../utils/api";

export const RECEIVE_DATA = "RECEIVE_DATA";

function receiveData(todos, goals) {
  return {
    type: RECEIVE_DATA,
    todos,
    goals,
  };
}

export function handleInitialData() {
  return (dispatch) => {
    Promise.all([API.fetchTodos(), API.fetchGoals()]).then(([todos, goals]) => {
      console.log("todos", todos);
      console.log("goals", goals);

      dispatch(receiveData(todos, goals));
    });
  };
}
