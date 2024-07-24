import "./App.css";
import Todos from "./Todos";

function App() {
  const { loading, dispatch } = props;

  if (loading) {
    return <h3>Loading</h3>;
  }

  return <Todos />;
}

export default App;

export const ConnectedApp = connect((state) => ({
  loading: state.loading,
}))(App);
