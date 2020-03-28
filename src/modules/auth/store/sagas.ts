import { call, put, select, takeLatest } from "@redux-saga/core/effects";
import { push, LOCATION_CHANGE } from "connected-react-router";
import * as Actions from "modules/auth/store/actions";
import { webStorage } from "modules/shared/utils/web-storage";
import { buildQueryParams } from "lib/http/utils";
import { AuthRequest } from "modules/auth/models/auth-request";
import { UserPrivate, AuthToken } from "lib/types";
import { ME_API } from "lib/http/user-api";
import { SENTRY } from "lib/sentry";
import { AppState } from "store";

const WEB_STORAGE_AUTH_OBJ_KEY = "redux-user-auth";
const WEB_STORAGE_AUTH_TARGET_KEY = "auth-redirect";

function* authViaStorageSaga() {
  try {
    const stored = webStorage.getItem<AuthToken>(WEB_STORAGE_AUTH_OBJ_KEY);

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
    scope: "user-read-playback-state user-modify-playback-state",
    response_type: "token"
  });

  window.location.replace("https://accounts.spotify.com/authorize?" + query);
}

function* authViaLoginSuccessSaga({
  payload
}: Actions.AuthViaLoginSuccessAction) {
  webStorage.setItem<AuthToken>(WEB_STORAGE_AUTH_OBJ_KEY, payload);

  const preAuthTarget = webStorage.getItem(WEB_STORAGE_AUTH_TARGET_KEY);

  if (preAuthTarget) {
    webStorage.removeItem(WEB_STORAGE_AUTH_TARGET_KEY);
  }

  yield put(push(preAuthTarget || "/categories"));
}

function* getUserSaga() {
  try {
    const currentUser: UserPrivate = yield call(ME_API.getCurrentUser);

    yield put(Actions.getUserSuccess(currentUser));
  } catch (err) {
    yield put(Actions.getUserFailure(err));
  }
}

function* getUserSuccessSaga() {
  const { user } = (({ auth }: AppState) => auth)(yield select());

  SENTRY.logUser(user!);
}

export const authSagas = [
  takeLatest(LOCATION_CHANGE, authViaStorageSaga),
  takeLatest(Actions.AUTH_VIA_STORAGE_FAILURE_TYPE, authViaStorageFailureSaga),
  takeLatest(Actions.AUTH_VIA_LOGIN_TYPE, authViaLoginSaga),
  takeLatest(Actions.AUTH_VIA_LOGIN_SUCCESS_TYPE, authViaLoginSuccessSaga),
  takeLatest(
    [
      Actions.AUTH_VIA_LOGIN_SUCCESS_TYPE,
      Actions.AUTH_VIA_STORAGE_SUCCESS_TYPE
    ],
    getUserSaga
  ),
  takeLatest(Actions.GET_USER_SUCCESS_TYPE, getUserSuccessSaga)
];
