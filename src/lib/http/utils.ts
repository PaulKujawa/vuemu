import { store } from "store";
import { isAuthenticated } from "modules/auth/utils/auth";

type FetchHeaders = Record<string, string>;

export function buildQueryParams<T>(queryParams: T): string {
  const query = Object.entries(queryParams)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  return encodeURI(query);
}

export function getUrl(path: string): string {
  const _path = path.startsWith("/") ? path.substring(1) : path;

  return `https://api.spotify.com/v1/${_path}`;
}

// TODO makes it impure. do not access store from within util function.
export function getHeaders(additionalHeaders?: FetchHeaders): FetchHeaders {
  const headers: FetchHeaders = { Accept: "application/json" };
  const { authToken } = store.getState().auth;

  // TODO otherwise, I could already throw here to save the request
  if (isAuthenticated(authToken)) {
    headers.Authorization = `Bearer ${authToken!.accessToken}`;
  }

  return { ...headers, ...additionalHeaders };
}
