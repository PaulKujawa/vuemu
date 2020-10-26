import { Severity } from "@sentry/browser";
import { SENTRY } from "lib";
import { ReactQueryConfig } from "react-query";
import { Store } from "redux";
import { AppState, AuthActions } from "store";

declare global {
  interface Window {
    __NEXT_REDUX_STORE__: Store<AppState>;
  }
}

function handleError(error: any) {
  switch (Number(error.message)) {
    case 401: {
      const { location } = window.__NEXT_REDUX_STORE__.getState().router;
      window.__NEXT_REDUX_STORE__.dispatch(AuthActions.login(location));
      break;
    }
    case 404: {
      SENTRY.captureException(error, Severity.Info);
      break;
    }
    default:
      SENTRY.captureException(error);
  }
}

export const REACT_QUERY_CONFIG: ReactQueryConfig = {
  queries: {
    onError: handleError
  },
  mutations: {
    onError: handleError
  }
};
