import {
  init as initLib,
  captureException as captureExceptionLib,
  captureMessage as captureMessageLib,
  setUser as setUserLib,
  configureScope,
  addBreadcrumb,
  withScope,
  Severity
} from "@sentry/browser";
import { UserPrivate } from "lib/types";
import createSentryMiddleware from "redux-sentry-middleware";

function init() {
  if (process.env.NODE_ENV !== "production") {
    return;
  }

  if (!process.env.REACT_APP_VERSION) {
    console.error("Env variable REACT_APP_VERSION is missing!");
    return;
  }

  initLib({
    dsn: "https://cb77dedfa0c54eeaa2ad87cfb10a1e86@sentry.io/1862430",
    environment: process.env.NODE_ENV,
    release: process.env.REACT_APP_VERSION,
    whitelistUrls: ["localhost:3000", "vuemu.netlify.com"]
  });
}

function logUser(user: UserPrivate) {
  setUserLib({
    username: user.displayName,
    id: user.id
  });
}

function captureException(error: Error, severity?: Severity) {
  withScope(function(scope) {
    if (severity) {
      scope.setLevel(severity);
    }
    captureExceptionLib(error);
  });
}

function captureMessage(message: string) {
  captureMessageLib(message);
}

export const SENTRY = {
  init,
  logUser,
  captureException,
  captureMessage,
  middleware: createSentryMiddleware({ configureScope, addBreadcrumb })
};
