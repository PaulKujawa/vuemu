import { AuthResponseSuccess } from "modules/auth/models/auth-response";
import { AC } from "modules/shared/utils/action-creator";
import { AuthState } from "modules/auth/store/state";

export const LOAD_AUTH_WEB_STORAGE_MISSING_TYPE =
  "[AUTH] LOAD AUTH WEB STORAGE MISSING";
export const loadAuthWebStorageMissing = () =>
  AC(LOAD_AUTH_WEB_STORAGE_MISSING_TYPE, undefined);
export type LoadAuthWebStorageMissingAction = ReturnType<
  typeof loadAuthWebStorageMissing
>;

export const LOAD_AUTH_WEB_STORAGE_SUCCESS_TYPE =
  "[AUTH] LOAD AUTH WEB STORAGE SUCCESS";
export const loadAuthWebStorageSuccess = (auth: AuthState) =>
  AC(LOAD_AUTH_WEB_STORAGE_SUCCESS_TYPE, auth);
export type LoadAuthWebStorageSuccessAction = ReturnType<
  typeof loadAuthWebStorageSuccess
>;

export const LOAD_AUTH_WEB_STORAGE_FAILURE_TYPE =
  "[AUTH] LOAD AUTH WEB STORAGE FAILURE";
export const loadAuthWebStorageFailure = (err: any) =>
  AC(LOAD_AUTH_WEB_STORAGE_FAILURE_TYPE, err);
export type LoadAuthWebStorageFailureAction = ReturnType<
  typeof loadAuthWebStorageFailure
>;

export const AUTH_SUCCESS_TYPE = "[AUTH] AUTHENTICATION SUCCESS";
export const authenticate = (payload: AuthResponseSuccess) =>
  AC(AUTH_SUCCESS_TYPE, payload);
export type AuthenticateSuccessAction = ReturnType<typeof authenticate>;

export type AuthActionTypes =
  | LoadAuthWebStorageMissingAction
  | LoadAuthWebStorageSuccessAction
  | LoadAuthWebStorageFailureAction
  | AuthenticateSuccessAction;
