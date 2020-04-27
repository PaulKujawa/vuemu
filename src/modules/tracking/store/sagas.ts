import { takeEvery } from "@redux-saga/core/effects";
import { select, takeLatest } from "@redux-saga/core/effects";
import { SENTRY } from "lib/sentry";
import { AppState } from "store";
import { GET_USER_SUCCESS_TYPE } from "modules/auth/store/actions";
import { Action } from "modules/shared/utils/action-creator";
import { Severity } from "@sentry/browser";

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
  takeLatest(GET_USER_SUCCESS_TYPE, getUserSuccessSaga),
  takeEvery((action: any) => /failure$/i.test(action.type), logFailureSaga)
];
