import { connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import { browseReducer } from "modules/browse/store/reducers";
import { categoryReducer } from "modules/category/store/reducers";
import { authReducer } from "modules/auth/store/reducers";
import { playlistReducer } from "modules/playlist/store/reducers";
import { combineReducers } from "redux";

export const browserHistory = createBrowserHistory();

export const rootReducer = combineReducers({
  auth: authReducer,
  browse: browseReducer,
  category: categoryReducer,
  playlist: playlistReducer,
  router: connectRouter(browserHistory)
});
