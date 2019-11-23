import { AuthState } from "modules/auth/store/state";
import { AuthResponseSuccess } from "modules/auth/models/auth-response";

// impure
export function isAuthenticated(state: AuthState): boolean {
  if (!state.accessToken || !state.tokenExp) {
    return false;
  }

  const date = new Date();
  const now = date.getTime();

  return now < state.tokenExp;
}

// impure
export function mapAuthResponseSuccess(dto: AuthResponseSuccess): AuthState {
  const date = new Date();

  const tokenExp = date.getTime() + dto.expires_in * 1000;

  return { accessToken: dto.access_token, tokenExp };
}
