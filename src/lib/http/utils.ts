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

export function getHeaders(additionalHeaders?: FetchHeaders): FetchHeaders {
  const headers: FetchHeaders = { Accept: "application/json" };
  const state = store.getState();

  // TODO otherwise, I could already throw here to save the request
  if (isAuthenticated(state.user)) {
    headers.Authorization = `Bearer ${state.user.accessToken}`;
  }

  return { ...headers, ...additionalHeaders };
}

// ignoreErrors?: boolean | number[];
// if (request.ignoreErrors !== true) logError(err);
// function logError(error: FetchResponseError, whitelist: number[] = []): void {
//   if (!error.status || !whitelist.includes(error.status)) {
//     window.console.warn("sentry:", error.message);
//   }
