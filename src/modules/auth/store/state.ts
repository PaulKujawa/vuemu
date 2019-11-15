import { webStorage } from "modules/shared/utils/web-storage";

export interface AuthState {
  accessToken: string | null;
  tokenExp: number | null;
}

const WEB_STORAGE_KEY = "redux-user-auth";

// TODO put into saga
export const initialState: AuthState = webStorage.getItem<AuthState>(
  WEB_STORAGE_KEY
) || {
  accessToken: null,
  tokenExp: null
};
