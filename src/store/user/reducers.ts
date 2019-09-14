import { AUTHENTICATE, UserActionTypes } from "store/user/actionTypes";
import { webStorage } from "utils/web-storage";

export interface UserState {
  accessToken: string | null;
  tokenExp: number | null;
}

const WEB_STORAGE_KEY = "redux-user-auth";

const initialState = webStorage.getItem<UserState>(WEB_STORAGE_KEY) || {
  accessToken: null,
  tokenExp: null
};

export const userReducer = (
  state: UserState = initialState,
  action: UserActionTypes
): UserState => {
  switch (action.type) {
    case AUTHENTICATE: {
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

// TODO has Redux no selectors?
export const isAuthenticated = (state: UserState): boolean => {
  if (!state.accessToken || !state.tokenExp) {
    return false;
  }

  const date = new Date();
  const now = date.getTime();

  return now < state.tokenExp;
};
