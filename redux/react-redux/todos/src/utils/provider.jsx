import React from "react";

export const Context = React.createContext(store);

function StoreProvider({ children }) {
  return <Context.Provider value={store}>{children}</Context.Provider>;
}

export default StoreProvider;
