import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { categoryReducer } from "store/category/reducers";
import { userReducer } from "store/user/reducers";
import { searchTermReducer } from "store/searchTerm/reducers";
import createSagaMiddleware from "redux-saga";
import { all } from "@redux-saga/core/effects";
import { categorySagas } from "store/category/sagas";
import { playlistReducer } from "store/playlist/reducers";
import { playlistSagas } from "store/playlist/sagas";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  category: categoryReducer,
  searchTerm: searchTermReducer,
  playlist: playlistReducer,
  user: userReducer
});

export const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(function*() {
  yield all([...categorySagas]);
  yield all([...playlistSagas]);
});

export type AppState = ReturnType<typeof rootReducer>;
