import { store } from "store";
import { isAuthenticated } from "store/user/reducers";
import { useState, useEffect } from "react";

interface FetchResponseError {
  message: string;
  status?: number;
}

export interface FetchResponse<DTO> {
  data: DTO | null;
  error: FetchResponseError | null;
  pending: boolean;
}

const BASE_URL = "https://api.spotify.com/v1";

export function buildQueryParams<T extends { [key: string]: string }>(
  queryParams: T
) {
  const query = Object.entries(queryParams)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  return encodeURI(query);
}

function buildRequestInit(init?: RequestInit) {
  const headers = [["Accept", "application/json"]];
  const state = store.getState();

  // TODO otherwise, I could already throw here to save the request
  if (isAuthenticated(state.user)) {
    headers.push(["Authorization", "Bearer " + state.user.accessToken]);
  }

  return { headers, ...init };
}

function logError(error: FetchResponseError, whitelist: number[] = []) {
  if (!error.status || !whitelist.includes(error.status)) {
    window.console.warn("sentry:", error.message);
  }
}

export interface FetchParameters {
  api: string;
  endpoint: string;
  query?: { [key: string]: string };
  ignoreErrors?: boolean | number[];
  requestInit?: RequestInit;
}
export function useFetch<DTO>(request: FetchParameters): FetchResponse<DTO> {
  const [data, setData] = useState<FetchResponse<DTO>["data"]>(null);
  const [error, setError] = useState<FetchResponse<DTO>["error"]>(null);
  const [pending, setPending] = useState<FetchResponse<DTO>["pending"]>(true);

  useEffect(() => {
    const controller = new AbortController();
    const init = buildRequestInit(request.requestInit);
    let url = `${BASE_URL}/${request.api}/${request.endpoint}`;

    if (request.query) {
      url += `?${buildQueryParams(request.query)}`;
    }

    (async () => {
      try {
        const res = await fetch(url, { ...init, signal: controller.signal });

        if (res.ok) {
          setData(await res.json());
        } else {
          const err = {
            message: res.statusText || res.status.toString(),
            status: res.status
          };
          setError(err);

          if (request.ignoreErrors !== true) {
            logError(err);
          }
        }
      } catch (err) {
        setError(err);

        if (request.ignoreErrors !== true) {
          logError(err);
        }
      } finally {
        setPending(false);
      }
    })();

    return () => {
      controller.abort();
      setData(null);
      setError(null);
    };
  }, [request]);

  return { data, error, pending };
}
