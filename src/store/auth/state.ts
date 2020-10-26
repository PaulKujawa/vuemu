import { AuthToken } from "values";

export interface AuthState {
  authToken: AuthToken | null;
}

export const initialState: AuthState = {
  authToken: null
};
