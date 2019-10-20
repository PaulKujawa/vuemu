import { AuthResponseSuccess } from "models/authentication";

export const AUTH_SUCCESS = "[USER] AUTH SUCCESS";
interface AuthenticateSuccessAction {
  type: typeof AUTH_SUCCESS;
  payload: AuthResponseSuccess;
}

export type UserActionTypes = AuthenticateSuccessAction;
