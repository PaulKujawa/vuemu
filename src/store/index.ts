import { createStore, combineReducers } from "redux";
import { userReducer } from "store/user/reducers";
import { searchTermReducer } from "store/searchTerm/reducers";

// see https://github.com/zalmoxisus/redux-devtools-extension#11-basic-store
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: Function;
  }
}

/*
 * reducer composition
 *
 * an emitted action flows through all reducer functions
 * that use a actionType based switch-case block to determine what state to return
 */
const rootReducer = combineReducers({
  searchTerm: searchTermReducer,
  user: userReducer
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export type AppState = ReturnType<typeof rootReducer>;
