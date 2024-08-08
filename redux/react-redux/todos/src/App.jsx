import { API } from "./utils/api";
import { useEffect } from "react";
import "./App.css";
import Todos from "./Todos";
import { handleInitialData } from "./actions/shared";
//
export default function App() {
  const { loading, dispatch } = props;

  useEffect(() => {
    dispatch(handleInitialData());
  }, []);

  if (loading) {
    return <h3>Loading</h3>;
  }

  return (
    <>
      <Todos />
      <Goals />
    </>
  );
}

// export const ConnectedApp = connect((state) => ({
//   loading: state.loading,
// }))(App);
