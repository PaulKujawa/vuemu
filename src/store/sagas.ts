import { categorySagas } from "modules/category/store/sagas";
import { playlistSagas } from "modules/playlist/store/sagas";
import { authSagas } from "modules/auth/store/sagas";
import { categoriesSagas } from "modules/categories/store/sagas";
import createSagaMiddleware from "redux-saga";
import { all } from "@redux-saga/core/effects";

export const sagaMiddleware = createSagaMiddleware({
  // handle errors not caught by causing Saga
});

export function* rootSagas() {
  yield all([
    ...authSagas,
    ...categoriesSagas,
    ...categorySagas,
    ...playlistSagas
  ]);
}
