import { takeEvery } from "@redux-saga/core/effects";
import { select, takeLatest } from "@redux-saga/core/effects";
import { Severity } from "@sentry/browser";
import { AppState } from "store";
import { Action } from "values";
import { SENTRY } from "lib/sentry";
import { AuthActions } from "modules/auth";

function* getUserSuccessSaga() {
  const { user } = (({ auth }: AppState) => auth)(yield select());

  SENTRY.logUser(user!);
}

export function logFailureSaga({ payload: error }: Action<string, Error>) {
  if ([401, 404].includes(Number(error.message))) {
    SENTRY.captureException(error, Severity.Info);
  }

  SENTRY.captureException(error);
}

export const trackingSagas = [
  takeLatest(AuthActions.GET_USER_SUCCESS_TYPE, getUserSuccessSaga),
  takeEvery((action: any) => /failure$/i.test(action.type), logFailureSaga)
];
