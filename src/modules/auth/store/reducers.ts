import { AUTH_SUCCESS_TYPE, AuthActionTypes } from "modules/auth/store/actions";
import { webStorage } from "modules/shared/utils/web-storage";
import { AuthState, initialState } from "modules/auth/store/state";

const WEB_STORAGE_KEY = "redux-user-auth";

export const authReducer = (
  state: AuthState = initialState,
  action: AuthActionTypes
): AuthState => {
  switch (action.type) {
    case AUTH_SUCCESS_TYPE: {
      const date = new Date();
      const tokenExp = date.getTime() + action.payload.expires_in * 1000;
      const auth = { accessToken: action.payload.access_token, tokenExp };

      // TODO saga
      webStorage.setItem<AuthState>(WEB_STORAGE_KEY, auth);

      return { ...state, ...auth };
    }

    default:
      return state;
  }
};
