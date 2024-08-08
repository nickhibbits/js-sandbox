import { useEffect } from "react";
import { handleInitialData } from "./actions/shared";
import { connect } from "react-redux";

import ConnectedTodos from "./components/Todos/Todos";

import "./App.css";

function App() {
  const { loading, dispatch } = props;

  useEffect(() => {
    dispatch(handleInitialData());
  }, []);

  if (loading) {
    return <h3>Loading</h3>;
  }

  return (
    <>
      <ConnectedTodos />
    </>
  );
}

export default connect((state) => ({
  loading: state.loading,
}))(App);
