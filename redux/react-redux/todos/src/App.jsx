import { API } from "./utils/api";
import { useEffect } from "react";
import "./App.css";
import Todos from "./Todos";
//
export default function App() {
  const { loading, dispatch } = props;

  useEffect(() => {
    Promise.all([API.fetchTodos(), API.fetchGoals()]).then(([todos, goals]) => {
      console.log("todos", todos);
      console.log("goals", goals);

      store.dispatch(receiveData(todos, goals));
    });
  }, []);

  if (loading) {
    return <h3>Loading</h3>;
  }

  return <Todos />;
}

// export const ConnectedApp = connect((state) => ({
//   loading: state.loading,
// }))(App);
