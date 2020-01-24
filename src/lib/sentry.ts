import {
  init as sentryInit,
  captureException as sentryCaptureException,
  captureMessage as sentryCaptureMessage,
  setUser as sentrySetUser,
  configureScope,
  addBreadcrumb
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

  sentryInit({
    dsn: "https://cb77dedfa0c54eeaa2ad87cfb10a1e86@sentry.io/1862430",
    environment: process.env.NODE_ENV,
    release: process.env.REACT_APP_VERSION,
    whitelistUrls: ["vuemu.netlify.com"]
  });
}

function logUser(user: UserPrivate) {
  sentrySetUser({
    username: user.display_name,
    id: user.id
  });
}

function captureException(error: Error) {
  sentryCaptureException(error);
}

function captureMessage(message: string) {
  sentryCaptureMessage(message);
}

export const SENTRY = {
  init,
  logUser,
  captureException,
  captureMessage,
  middleware: createSentryMiddleware({ configureScope, addBreadcrumb })
};
