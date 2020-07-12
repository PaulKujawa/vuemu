import {
  call,
  put,
  takeLatest,
  takeEvery,
  select
} from "@redux-saga/core/effects";
import {
  push,
  LOCATION_CHANGE,
  LocationChangeAction
} from "connected-react-router";
import { buildQueryParams, webStorage } from "modules/shared";
import { Action, UserPrivate, AuthToken } from "values";
import { ME_API } from "lib/http/user-api";
import { AppState } from "store";
import { Location } from "history";
import { fetchClient } from "lib/http/api-methods";
import { AuthRequest } from "../models";
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

function* getUserSaga() {
  try {
    const currentUser: UserPrivate = yield call(ME_API.getCurrentUser);

    yield put(AuthActions.getUserSuccess(currentUser));
  } catch (err) {
    yield put(AuthActions.getUserFailure(err));
  }
}

export function* handleHttp401Saga({ payload }: Action<string, Error>) {
  if (Number(payload.message) === 401) {
    const location = (({ router }: AppState) => router.location)(
      yield select()
    );

    yield put(AuthActions.login(location));
  }
}

export const authSagas = [
  takeLatest(LOCATION_CHANGE, loadAuthTokenSaga),
  takeLatest(
    [AuthActions.LOGIN_TYPE, AuthActions.LOAD_AUTH_TOKEN_FAILURE_TYPE],
    loginSaga
  ),
  takeLatest(AuthActions.LOGIN_SUCCESS_TYPE, loginSuccessSaga),
  takeEvery(
    [AuthActions.LOAD_AUTH_TOKEN_SUCCESS_TYPE, AuthActions.LOGIN_SUCCESS_TYPE],
    getUserSaga
  ),
  takeEvery((action: any) => /failure$/i.test(action.type), handleHttp401Saga)
];
