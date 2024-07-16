import React from "react";
import { store } from "../../utils/store";

export const Context = React.createContext(store);

function StoreProvider({ children }) {
  return <Context.Provider value={store}>{children}</Context.Provider>;
}

export default StoreProvider;
