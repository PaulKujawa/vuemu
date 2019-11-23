import { AC } from "modules/shared/utils/action-creator";
import { AuthState } from "modules/auth/store/state";

export const AUTH_VIA_STORAGE_MISSING_TYPE = "[AUTH] AUTH VIA STORAGE MISSING";
export const authViaStorageMissing = () =>
  AC(AUTH_VIA_STORAGE_MISSING_TYPE, undefined);
export type AuthViaStorageMissingAction = ReturnType<
  typeof authViaStorageMissing
>;

export const AUTH_VIA_STORAGE_SUCCESS_TYPE = "[AUTH] AUTH VIA STORAGE SUCCESS";
export const authViaStorageSuccess = (auth: AuthState) =>
  AC(AUTH_VIA_STORAGE_SUCCESS_TYPE, auth);
export type AuthViaStorageSuccessAction = ReturnType<
  typeof authViaStorageSuccess
>;

export const AUTH_VIA_STORAGE_FAILURE_TYPE = "[AUTH] AUTH VIA STORAGE FAILURE";
export const authViaStorageFailure = (err: any) =>
  AC(AUTH_VIA_STORAGE_FAILURE_TYPE, err);
export type AuthViaStorageFailureAction = ReturnType<
  typeof authViaStorageFailure
>;

export const AUTH_VIA_LOGIN_TYPE = "[AUTH] AUTH VIA LOGIN";
export const authViaLogin = (targetUrl?: string) =>
  AC(AUTH_VIA_LOGIN_TYPE, targetUrl);
export type AuthViaLoginAction = ReturnType<typeof authViaLogin>;

export const AUTH_VIA_LOGIN_SUCCESS_TYPE = "[AUTH] AUTH VIA LOGIN SUCCESS";
export const authViaLoginSuccess = (payload: AuthState) =>
  AC(AUTH_VIA_LOGIN_SUCCESS_TYPE, payload);
export type AuthViaLoginSuccessAction = ReturnType<typeof authViaLoginSuccess>;

export type AuthActionTypes =
  | AuthViaStorageMissingAction
  | AuthViaStorageSuccessAction
  | AuthViaStorageFailureAction
  | AuthViaLoginAction
  | AuthViaLoginSuccessAction;
