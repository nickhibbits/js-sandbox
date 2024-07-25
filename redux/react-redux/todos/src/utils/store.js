import { generateId } from ".";
import { combineReducers, connect } from "redux";

// middleware preventing user from adding todo or goal with the word bitcoin

// Reducers

export const store = Redux.createStore(
  combineReducers({
    todos,
    goals,
  }),
  Redux.applyMiddleware(checker, logger)
);
