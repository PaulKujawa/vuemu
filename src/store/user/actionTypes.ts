import { AuthResponseSuccess } from "modules/auth/models/auth-response";

export const AUTH_SUCCESS = "[USER] AUTH SUCCESS";
interface AuthenticateSuccessAction {
  type: typeof AUTH_SUCCESS;
  payload: AuthResponseSuccess;
}

export type UserActionTypes = AuthenticateSuccessAction;
