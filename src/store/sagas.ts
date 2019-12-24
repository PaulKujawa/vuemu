import { categorySagas } from "modules/category/store/sagas";
import { playlistSagas } from "modules/playlist/store/sagas";
import { authSagas } from "modules/auth/store/sagas";
import { browseSagas } from "modules/browse/store/sagas";
import createSagaMiddleware from "redux-saga";
import { all } from "@redux-saga/core/effects";
import { SENTRY } from "lib/sentry";

export const sagaMiddleware = createSagaMiddleware({
  // handle errors not caught by causing Saga
  onError: SENTRY.captureException
});

export function* rootSagas() {
  yield all([...authSagas, ...browseSagas, ...categorySagas, ...playlistSagas]);
}
