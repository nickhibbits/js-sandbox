import GoalsContainer from "./GoalsContainer";
import ConnectedTodosContainer from "./TodosContainer";

function Todos(props) {
  return (
    <>
      <ConnectedTodosContainer store={store} /> 
      {/* <GoalsContainer store={store} /> */}
    </>
  );
}

export default Todos;
