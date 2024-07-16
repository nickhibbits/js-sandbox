import { Context } from "./provider";

import GoalsContainer from "./GoalsContainer";
import TodosContainer from "./TodosContainer";

function Todos() {
  return (
    <Context.Consumer>
      {(store) => {
        return (
          <>
            <TodosContainer store={store} />
            <GoalsContainer store={store} />
          </>
        );
      }}
    </Context.Consumer>
  );
}

export default Todos;
