export interface AuthState {
  accessToken: string | null;
  tokenExp: number | null;
}

export const initialState: AuthState = {
  accessToken: null,
  tokenExp: null
};
