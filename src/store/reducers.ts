import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import { authReducer } from "store/auth";

export const browserHistory = createBrowserHistory();

export const rootReducer = combineReducers({
  auth: authReducer,
  router: connectRouter(browserHistory)
});
