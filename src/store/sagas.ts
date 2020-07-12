import createSagaMiddleware from "redux-saga";
import { all } from "@redux-saga/core/effects";
import { SENTRY } from "lib/sentry";
import { categorySagas } from "modules/category";
import { playlistSagas } from "modules/playlist";
import { authSagas } from "modules/auth";
import { browseSagas } from "modules/browse";
import { trackingSagas } from "modules/tracking";

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
