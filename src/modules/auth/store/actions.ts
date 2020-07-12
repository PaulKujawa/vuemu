import { AC } from "modules/shared";
import { UserPrivate, AuthToken } from "values";
import { Location } from "history";

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

export const GET_USER_TYPE = "[AUTH] GET USER";
export const getUser = () => AC(GET_USER_TYPE);
export type GetUserAction = ReturnType<typeof getUser>;

export const GET_USER_SUCCESS_TYPE = "[AUTH] GET USER SUCCESS";
export const getUserSuccess = (payload: UserPrivate) =>
  AC(GET_USER_SUCCESS_TYPE, payload);
export type GetUserSuccessAction = ReturnType<typeof getUserSuccess>;

export const GET_USER_FAILURE_TYPE = "[AUTH] GET USER FAILURE";
export const getUserFailure = (err: any) => AC(GET_USER_FAILURE_TYPE, err);
export type GetUserFailureAction = ReturnType<typeof getUserFailure>;

export type AuthActionTypes =
  | LoadAuthTokenSuccessAction
  | LoadAuthTokenFailureAction
  | LoginAction
  | LoginSuccessAction
  | GetUserAction
  | GetUserSuccessAction
  | GetUserFailureAction;
