import { combineReducers } from "redux";
import { logger } from "../middleware/logger";
import { checker } from "../middleware/checker";
import { thunk } from "../middleware/thunk";

// middleware preventing user from adding todo or goal with the word bitcoin

export const store = Redux.createStore(
  combineReducers({
    todos,
    goals,
  }),
  Redux.applyMiddleware(thunk, checker, logger) // replace thunk to use react-redux library
);
