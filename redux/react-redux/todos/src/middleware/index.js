import { checker } from "./checker";
import logger from "./logger";
import { thunk } from "redux-thunk";

import { applyMiddleware } from "redux";

// export default applyMiddleware(checker, logger, thunk);

const middleware = [checker, logger, thunk];

export default middleware;
