import { categorySagas } from "modules/category/store/sagas";
import { playlistSagas } from "modules/playlist/store/sagas";
import { authSagas } from "modules/auth/store/sagas";
import { browseSagas } from "modules/browse/store/sagas";
import createSagaMiddleware from "redux-saga";
import { all } from "@redux-saga/core/effects";
import { SENTRY } from "lib/sentry";
import { trackingSagas } from "modules/tracking/store/sagas";

export const sagaMiddleware = createSagaMiddleware({
  // handle errors not caught by Saga
  onError: error => SENTRY.captureException(error)
});

export function* rootSagas() {
  yield all([
    ...authSagas,
    ...browseSagas,
    ...categorySagas,
    ...playlistSagas,
    ...trackingSagas
  ]);
}
