import { useEffect } from "react";
import { Context } from "./provider";

export function connnect(mapStateToProps) {
  return (Component) => {
    function Receiver(store) {
      useEffect(() => {
        const { subscribe } = store;

        const unsubscribe = subscribe(() => forceUpdate);
        return () => {
          unsubscribe();
        };
      });

      const { dispatch, getState } = store;
      const state = getState();
      const stateNeeded = mapStateToProps(state);
      return <Component {...stateNeeded} dispatch={dispatch} />;
    }

    return function ConnectedComponent() {
      return (
        <Context.Consumer>
          {(store) => {
            <Receiver store={store} />;
          }}
        </Context.Consumer>
      );
    };
  };
}
