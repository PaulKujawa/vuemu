import { AUTH_SUCCESS, UserActionTypes } from "store/user/actionTypes";
import { webStorage } from "utils/web-storage";

export interface UserState {
  accessToken: string | null;
  tokenExp: number | null;
}

const WEB_STORAGE_KEY = "redux-user-auth";

const initialState: UserState = webStorage.getItem<UserState>(
  WEB_STORAGE_KEY
) || {
  accessToken: null,
  tokenExp: null
};

export const userReducer = (
  state: UserState = initialState,
  action: UserActionTypes
): UserState => {
  switch (action.type) {
    case AUTH_SUCCESS: {
      const date = new Date();
      const tokenExp = date.getTime() + action.payload.expires_in * 1000;
      const auth = { accessToken: action.payload.access_token, tokenExp };

      webStorage.setItem<UserState>(WEB_STORAGE_KEY, auth);

      return { ...state, ...auth };
    }

    default:
      return state;
  }
};
