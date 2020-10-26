import { all } from "@redux-saga/core/effects";
import { SENTRY } from "lib";
import createSagaMiddleware from "redux-saga";
import { authSagas } from "store/auth";

export const sagaMiddleware = createSagaMiddleware({
  // handle errors not caught by Saga
  onError: error => SENTRY.captureException(error)
});

export function* rootSagas() {
  yield all([...authSagas]);
}
