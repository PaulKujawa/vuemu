import { AuthToken } from "lib/types";
import { AuthResponseSuccess } from "modules/auth/models/auth-response";

export function isAuthTokenExpired(tokenExpiration: number): boolean {
  const date = new Date();
  const now = date.getTime();

  return tokenExpiration < now;
}

export function mapAuthResponseSuccess(dto: AuthResponseSuccess): AuthToken {
  const date = new Date();

  const tokenExp = date.getTime() + dto.expires_in * 1000;

  return { accessToken: dto.access_token, tokenExp };
}
