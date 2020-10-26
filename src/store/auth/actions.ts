import { Location } from "history";
import { AC } from "utils";
import { AuthToken } from "values";

export const LOAD_AUTH_TOKEN_SUCCESS_TYPE = "[AUTH] LOAD AUTH TOKEN SUCCESS";
export const loadAuthTokenSuccess = (auth: AuthToken) =>
  AC(LOAD_AUTH_TOKEN_SUCCESS_TYPE, auth);
export type LoadAuthTokenSuccessAction = ReturnType<
  typeof loadAuthTokenSuccess
>;

export const LOAD_AUTH_TOKEN_FAILURE_TYPE = "[AUTH] LOAD AUTH TOKEN FAILURE";
export const loadAuthTokenFailure = (err: any) =>
  AC(LOAD_AUTH_TOKEN_FAILURE_TYPE, err);
export type LoadAuthTokenFailureAction = ReturnType<
  typeof loadAuthTokenFailure
>;

export const LOGIN_TYPE = "[AUTH] LOGIN";
export const login = (targetLocation?: Location) =>
  AC(LOGIN_TYPE, targetLocation);
export type LoginAction = ReturnType<typeof login>;

export const LOGIN_SUCCESS_TYPE = "[AUTH] LOGIN SUCCESS";
export const loginSuccess = (payload: AuthToken) =>
  AC(LOGIN_SUCCESS_TYPE, payload);
export type LoginSuccessAction = ReturnType<typeof loginSuccess>;

export type AuthActionTypes =
  | LoadAuthTokenSuccessAction
  | LoadAuthTokenFailureAction
  | LoginAction
  | LoginSuccessAction;
