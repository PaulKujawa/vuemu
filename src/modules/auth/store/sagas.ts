import { put, takeLatest } from "@redux-saga/core/effects";
import * as Actions from "modules/auth/store/actions";
import * as NavActions from "modules/nav/store/actions";
import { webStorage } from "modules/shared/utils/web-storage";
import { AuthState } from "modules/auth/store/state";

function* loadAuthWebStorageTypeSaga() {
  try {
    const stored = webStorage.getItem<AuthState>("redux-user-auth");

    stored
      ? yield put(Actions.loadAuthWebStorageSuccess(stored))
      : yield put(Actions.loadAuthWebStorageMissing());
  } catch (err) {
    yield put(Actions.loadAuthWebStorageFailure(err));
  }
}

function loadAuthWebStorageFailureSaga() {
  webStorage.removeItem("redux-user-auth");
}

export const authSagas = [
  takeLatest(NavActions.INITIAL_LOAD_TYPE, loadAuthWebStorageTypeSaga),
  takeLatest(
    Actions.LOAD_AUTH_WEB_STORAGE_FAILURE_TYPE,
    loadAuthWebStorageFailureSaga
  )
];

/* 
  - LoginCheck component via utils aus auth module abdecken
  - Login component nach Auth component umbennen und je nach queryParams rendern oder checken

*/
