import * as Actions from "modules/auth/store/actions";
import { AuthState, initialState } from "modules/auth/store/state";

export const authReducer = (
  state: AuthState = initialState,
  action: Actions.AuthActionTypes
): AuthState => {
  switch (action.type) {
    case Actions.AUTH_VIA_STORAGE_SUCCESS_TYPE:
      return { ...state, ...action.payload };
    case Actions.AUTH_VIA_LOGIN_SUCCESS_TYPE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
