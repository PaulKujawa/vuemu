import { routerMiddleware } from "connected-react-router";
import { SENTRY } from "lib";
import { applyMiddleware, compose, createStore } from "redux";
import { rootSagas, sagaMiddleware } from "store/sagas";
import { browserHistory, rootReducer } from "./reducers";

export * from "./auth";
export { browserHistory };

const composeEnhancer =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancer(
    applyMiddleware(
      sagaMiddleware,
      routerMiddleware(browserHistory),
      SENTRY.middleware
    )
  )
);

sagaMiddleware.run(rootSagas);

export type AppState = ReturnType<typeof rootReducer>;
