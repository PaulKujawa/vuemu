import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import { browseReducer } from "modules/browse";
import { categoryReducer } from "modules/category";
import { authReducer } from "modules/auth";
import { playlistReducer } from "modules/playlist";
import { playerReducer } from "modules/player";

export const browserHistory = createBrowserHistory();

export const rootReducer = combineReducers({
  auth: authReducer,
  browse: browseReducer,
  category: categoryReducer,
  player: playerReducer,
  playlist: playlistReducer,
  router: connectRouter(browserHistory)
});
