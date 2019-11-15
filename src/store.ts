import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { categoryReducer } from "modules/category/store/reducers";
import { userReducer } from "modules/auth/store/reducers";
import createSagaMiddleware from "redux-saga";
import { all } from "@redux-saga/core/effects";
import { categorySagas } from "modules/category/store/sagas";
import { playlistReducer } from "modules/playlist/store/reducers";
import { playlistSagas } from "modules/playlist/store/sagas";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  category: categoryReducer,
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
