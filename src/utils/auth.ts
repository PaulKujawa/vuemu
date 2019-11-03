import { buildQueryParams } from "http/utils";
import { Location } from "history";
import { AuthRequest } from "models/authentication";
import { webStorage } from "utils/web-storage";
import { UserState } from "store/user/reducers";

const AUTH_WEB_STORAGE_KEY = "auth-redirect";

export const getSpotifyAuthUrl = () => {
  const query = buildQueryParams<AuthRequest>({
    // exact urls need to be registered via Spotify UI
    redirect_uri: window.location.origin + "/login-check",
    client_id: "06ea71fe4011445093a4e6acfb6ff784",
    response_type: "token"
  });

  return "https://accounts.spotify.com/authorize?" + query;
};

export const setPostAuthTarget = (fullPath: string): void => {
  webStorage.setItem(AUTH_WEB_STORAGE_KEY, fullPath);
};

export const getPostAuthTarget = (targetRoute: string): Location | string => {
  const preAuthTarget = webStorage.getItem<Location>(AUTH_WEB_STORAGE_KEY);

  if (preAuthTarget) {
    webStorage.removeItem(AUTH_WEB_STORAGE_KEY);
  }

  return preAuthTarget || targetRoute;
};

export const isAuthenticated = (state: UserState): boolean => {
  if (!state.accessToken || !state.tokenExp) {
    return false;
  }

  const date = new Date();
  const now = date.getTime();

  return now < state.tokenExp;
};
