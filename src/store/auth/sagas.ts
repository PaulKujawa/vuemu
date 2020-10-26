import { put, takeLatest } from "@redux-saga/core/effects";
import {
  LocationChangeAction,
  LOCATION_CHANGE,
  push
} from "connected-react-router";
import { Location } from "history";
import { fetchClient } from "lib";
import { buildQueryParams, webStorage } from "utils";
import { AuthRequest, AuthToken } from "values";
import { AuthActions } from ".";

const WEB_STORAGE_AUTH_OBJ_KEY = "redux-user-auth";
const WEB_STORAGE_AUTH_TARGET_KEY = "auth-redirect";

function* loadAuthTokenSaga({ payload }: LocationChangeAction) {
  if (!payload.isFirstRendering) {
    return;
  }

  try {
    const authToken = webStorage.getItem<AuthToken>(WEB_STORAGE_AUTH_OBJ_KEY);

    if (authToken) {
      fetchClient.setAuthToken(authToken!.accessToken);
      yield put(AuthActions.loadAuthTokenSuccess(authToken));
    }
  } catch (err) {
    yield put(AuthActions.loadAuthTokenFailure(err));
  }
}

function loginSaga({ payload }: AuthActions.LoginAction) {
  webStorage.removeItem(WEB_STORAGE_AUTH_OBJ_KEY);

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

function* loginSuccessSaga({ payload }: AuthActions.LoginSuccessAction) {
  fetchClient.setAuthToken(payload.accessToken);
  webStorage.setItem<AuthToken>(WEB_STORAGE_AUTH_OBJ_KEY, payload);

  const preAuthTarget = webStorage.getItem<Location>(
    WEB_STORAGE_AUTH_TARGET_KEY
  );

  if (preAuthTarget) {
    webStorage.removeItem(WEB_STORAGE_AUTH_TARGET_KEY);
    yield put(push(preAuthTarget));
  } else {
    yield put(push("/browse"));
  }
}

export const authSagas = [
  takeLatest(LOCATION_CHANGE, loadAuthTokenSaga),
  takeLatest(
    [AuthActions.LOGIN_TYPE, AuthActions.LOAD_AUTH_TOKEN_FAILURE_TYPE],
    loginSaga
  ),
  takeLatest(AuthActions.LOGIN_SUCCESS_TYPE, loginSuccessSaga)
];
