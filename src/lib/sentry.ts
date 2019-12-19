import {
  init,
  captureException,
  captureMessage,
  setUser
} from "@sentry/browser";
import { UserPrivate } from "lib/types";

init({ dsn: "https://cb77dedfa0c54eeaa2ad87cfb10a1e86@sentry.io/1862430" });

function logUser(user: UserPrivate) {
  setUser({
    username: user.display_name,
    id: user.id
  });
}

function logException(error: Error) {
  captureException(error);
}

function logMessage(message: string) {
  captureMessage(message);
}

export const SENTRY = {
  logUser,
  logException,
  logMessage
};
