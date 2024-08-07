import { combineReducers } from "redux";
import { thunk } from "../middleware/thunk";
import { logger } from "../middleware/logger";
import { checker } from "../middleware/checker";

// middleware preventing user from adding todo or goal with the word bitcoin

export const store = Redux.createStore(
  combineReducers({
    todos,
    goals,
  }),
  Redux.applyMiddleware(checker, logger, thunk)
);
