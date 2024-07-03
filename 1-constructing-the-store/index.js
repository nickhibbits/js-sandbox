function createStore() {
  // store should have 4 parts
  // 1. The state
  // 2. Get the state -- getState()
  // 3. Listen to state changes -- subscribe()
  // 4. Update the state

  let state;
  let listeners = [];

  const getState = () => state;

  const subscribe = (listener) => {
    // each time subscribe is invoked, the cb passed to it is stored in our listeners array.
    listeners.push(listener);

    // if user calls this function, returned to them wherever they invoked subscribe, it's removed from our listeners array.
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  };

  return {
    getState,
    subscribe,
  };
}

const store = createStore();
