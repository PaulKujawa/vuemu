import { AuthRequest, AuthResponse } from "models/authentication";
import { store } from "redux/store";
import { mapQueryParams } from "utils/http";
import { webStorage } from "utils/web-storage";
import { Location } from "history";

const AUTH_WEB_STORAGE_KEY = "auth-redirect";

export const getSpotifyAuthUrl = () => {
  return mapQueryParams<AuthRequest>({
    // exact urls need to be registered via Spotify UI
    redirect_uri: window.location.origin + "/login-check",
    client_id: "06ea71fe4011445093a4e6acfb6ff784",
    response_type: "token"
  })("https://accounts.spotify.com/authorize");
};

export const mapSpotifyAuthRes = (hash: string): AuthResponse => {
  return hash
    .substring(1)
    .split("&")
    .map(keyValue => keyValue.split("="))
    .reduce(
      (acc: any, [key, value]) => {
        acc[key] = value;
        return acc;
      },
      ({} as any) as AuthResponse
    );
};

export const setPostAuthTarget = (fullPath: string): void => {
  webStorage.setItem(AUTH_WEB_STORAGE_KEY, fullPath);
};

export const getPostAuthTarget = (): Location | string => {
  const preAuthTarget = webStorage.getItem<Location>(AUTH_WEB_STORAGE_KEY);

  if (preAuthTarget) {
    webStorage.removeItem(AUTH_WEB_STORAGE_KEY);
  }

  if (store.getters.auth.loggedIn) {
    return preAuthTarget ? preAuthTarget : "/categories";
  }

  return "/";
};
