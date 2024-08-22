import { checker } from "./checker";
import logger from "./logger";
import { thunk } from "redux-thunk";

const middleware = [checker, logger, thunk];

export default middleware;
