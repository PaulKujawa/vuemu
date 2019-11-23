import { put, takeLatest } from "@redux-saga/core/effects";
import * as Actions from "modules/auth/store/actions";
import * as NavActions from "modules/nav/store/actions";
import { webStorage } from "modules/shared/utils/web-storage";
import { AuthState } from "modules/auth/store/state";
import { buildQueryParams } from "lib/http/utils";
import { AuthRequest } from "modules/auth/models/auth-request";

const WEB_STORAGE_AUTH_OBJ_KEY = "redux-user-auth";
const WEB_STORAGE_AUTH_TARGET_KEY = "auth-redirect";

function* authViaStorageSaga() {
  try {
    const stored = webStorage.getItem<AuthState>(WEB_STORAGE_AUTH_OBJ_KEY);

    if (stored) {
      yield put(Actions.authViaStorageSuccess(stored));
    } else {
      yield put(Actions.authViaStorageMissing());
    }
  } catch (err) {
    yield put(Actions.authViaStorageFailure(err));
  }
}

function authViaStorageFailureSaga() {
  webStorage.removeItem(WEB_STORAGE_AUTH_OBJ_KEY);
}

function authViaLoginSaga({ payload }: Actions.AuthViaLoginAction) {
  if (payload) {
    webStorage.setItem(WEB_STORAGE_AUTH_TARGET_KEY, payload);
  }

  // exact urls need to be registered via Spotify UI
  const query = buildQueryParams<AuthRequest>({
    redirect_uri: window.location.origin + "/auth",
    client_id: "06ea71fe4011445093a4e6acfb6ff784",
    response_type: "token"
  });

  window.location.replace("https://accounts.spotify.com/authorize?" + query);
}

function authViaLoginSuccessSaga({
  payload
}: Actions.AuthViaLoginSuccessAction) {
  webStorage.setItem<AuthState>(WEB_STORAGE_AUTH_OBJ_KEY, payload);

  const preAuthTarget = webStorage.getItem(WEB_STORAGE_AUTH_TARGET_KEY);

  if (preAuthTarget) {
    webStorage.removeItem(WEB_STORAGE_AUTH_TARGET_KEY);
  }

  // TODO navigate to preAuthTarget || "/categories"
}

export const authSagas = [
  takeLatest(NavActions.INITIAL_LOAD_TYPE, authViaStorageSaga),
  takeLatest(Actions.AUTH_VIA_STORAGE_FAILURE_TYPE, authViaStorageFailureSaga),
  takeLatest(Actions.AUTH_VIA_LOGIN_TYPE, authViaLoginSaga),
  takeLatest(Actions.AUTH_VIA_LOGIN_SUCCESS_TYPE, authViaLoginSuccessSaga)
];
