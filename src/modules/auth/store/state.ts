import { UserPrivate, AuthToken } from "lib/types";

export interface AuthState {
  authToken: AuthToken | null;
  user: UserPrivate | null;
  userError: any;
}

export const initialState: AuthState = {
  authToken: null,
  user: null,
  userError: null
};
