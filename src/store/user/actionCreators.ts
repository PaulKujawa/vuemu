import { AUTH_SUCCESS, UserActionTypes } from "store/user/actionTypes";
import { AuthResponseSuccess } from "modules/auth/models/auth-response";

export function authenticate(payload: AuthResponseSuccess): UserActionTypes {
  return { type: AUTH_SUCCESS, payload };
}
