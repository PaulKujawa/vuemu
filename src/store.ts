import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { categoryReducer } from "modules/category/store/reducers";
import { authReducer } from "modules/auth/store/reducers";
import createSagaMiddleware from "redux-saga";
import { all } from "@redux-saga/core/effects";
import { categorySagas } from "modules/category/store/sagas";
import { playlistReducer } from "modules/playlist/store/reducers";
import { playlistSagas } from "modules/playlist/store/sagas";
import { authSagas } from "modules/auth/store/sagas";
import { createBrowserHistory } from "history";
import { connectRouter, routerMiddleware } from "connected-react-router";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  auth: authReducer,
  category: categoryReducer,
  playlist: playlistReducer,
  router: connectRouter(history)
});

const composeEnhancer =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(sagaMiddleware, routerMiddleware(history)))
);

sagaMiddleware.run(function*() {
  yield all([...authSagas, ...categorySagas, ...playlistSagas]);
});

export type AppState = ReturnType<typeof rootReducer>;
