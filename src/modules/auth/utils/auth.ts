import { AuthToken } from "lib/types";
import { AuthResponseSuccess } from "modules/auth/models/auth-response";

// impure
export function isAuthTokenStillValid(tokenExpiration: number): boolean {
  const date = new Date();
  const now = date.getTime();

  return now < tokenExpiration;
}

// impure
export function mapAuthResponseSuccess(dto: AuthResponseSuccess): AuthToken {
  const date = new Date();

  const tokenExp = date.getTime() + dto.expires_in * 1000;

  return { accessToken: dto.access_token, tokenExp };
}
