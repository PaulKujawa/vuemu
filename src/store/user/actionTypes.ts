import { AuthResponseSuccess } from "models/authentication";

export const AUTHENTICATE = "AUTHENTICATE";

interface AuthenticateAction {
  type: typeof AUTHENTICATE;
  payload: AuthResponseSuccess;
}

export type UserActionTypes = AuthenticateAction;
