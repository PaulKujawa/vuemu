import { connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import { categoriesReducer } from "modules/categories/store/reducers";
import { categoryReducer } from "modules/category/store/reducers";
import { authReducer } from "modules/auth/store/reducers";
import { playlistReducer } from "modules/playlist/store/reducers";
import { combineReducers } from "redux";

export const browserHistory = createBrowserHistory();

export const rootReducer = combineReducers({
  auth: authReducer,
  categories: categoriesReducer,
  category: categoryReducer,
  playlist: playlistReducer,
  router: connectRouter(browserHistory)
});
