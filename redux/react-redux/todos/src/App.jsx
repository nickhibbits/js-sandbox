import { useEffect } from "react";
import { handleInitialData } from "@/actions/shared";
import { connect } from "react-redux";

import Todos from "@/components/Todos/Todos";

import "@/App.css";

function App(props) {
  const { loading, dispatch } = props;

  useEffect(() => {
    dispatch(handleInitialData());
  }, []);

  if (loading === true) {
    return <h3>Loading</h3>;
  }

  return (
    <>
      <Todos />
    </>
  );
}

export default connect((state) => ({
  loading: state.loading,
}))(App);
