import { AUTHENTICATE, UserActionTypes } from "store/user/actionTypes";
import { AuthResponseSuccess } from "models/authentication";

export function authenticate(payload: AuthResponseSuccess): UserActionTypes {
  return { type: AUTHENTICATE, payload };
}
