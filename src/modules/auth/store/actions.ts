import { AuthResponseSuccess } from "modules/auth/models/auth-response";
import { AC } from "modules/shared/utils/action-creator";

export const AUTH_SUCCESS_TYPE = "[AUTH] AUTHENTICATION SUCCESS";
export const authenticate = (payload: AuthResponseSuccess) =>
  AC(AUTH_SUCCESS_TYPE, payload);
export type AuthenticateSuccessAction = ReturnType<typeof authenticate>;

export type UserActionTypes = AuthenticateSuccessAction;
