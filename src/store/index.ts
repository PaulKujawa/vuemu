import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "connected-react-router";
import { rootSagas, sagaMiddleware } from "store/sagas";
import { SENTRY } from "lib/sentry";
import { browserHistory, rootReducer } from "./reducers";

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
