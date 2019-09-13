import React from "react";
import { store } from "redux/store";

interface FetchParams {
  url: RequestInfo;
  init?: RequestInit;
}

interface FetchResponseError {
  message: string;
  status?: number;
}

export interface FetchResponse<DTO> {
  data: DTO | null;
  error: FetchResponseError | null;
  pending: boolean;
}

export interface AbortableFetchResponse<DTO> extends FetchResponse<DTO> {
  controller: AbortController;
}

// just tentative and typing would be fantastic
type Unary = (arg?: any) => any;
export function pipe(...fns: Unary[]) {
  return (initialValue?: any) => fns.reduce((acc, fn) => fn(acc), initialValue);
}

export const getSpotifyBaseUrl = () => "https://api.spotify.com/v1";

export const mapSpotifyApi = (api: string) => {
  return (baseUrl: string) => `${baseUrl}/${api}`;
};

export const mapSpotifyEndpoint = (endpoint: string) => {
  return (apiUrl: string) => `${apiUrl}/${endpoint}`;
};

export const mapQueryParams = <T extends { [key: string]: string }>(
  queryParams: T
) => {
  return (path: string) => {
    const url = new URL(path);

    // performs url URL encoding
    Object.entries(queryParams).forEach(([queryKey, queryValue]) =>
      url.searchParams.append(queryKey, queryValue)
    );

    return url.toString();
  };
};

export const mapRequestInit = (init?: RequestInit) => {
  return (url: RequestInfo) => {
    const headers = [["Accept", "application/json"]];
    const auth = store.getters.auth;

    // TODO otherwise, I could already throw here to save the request
    if (auth.loggedIn) {
      headers.push(["Authorization", "Bearer " + auth.accessToken]);
    }

    return {
      url,
      init: { headers, ...init }
    };
  };
};

export function useFetch<DTO>({
  url,
  init
}: FetchParams): AbortableFetchResponse<DTO> {
  const [data, setData] = React.useState<DTO | null>(null);
  const [error, setError] = React.useState<FetchResponseError | null>(null);
  const [pending, setPending] = React.useState<boolean>(true);
  const [controller] = React.useState(new AbortController()); // TODO still lots of questions

  React.useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url, { ...init, signal: controller.signal });

        if (res.ok) {
          setData(await res.json());
        } else {
          setError({
            message: res.statusText || res.status.toString(),
            status: res.status
          });
        }
      } catch (error) {
        setError(error);
      } finally {
        setPending(false);
      }

      // return () => controller.abort();
    })();
  }, [
    /* url, init, controller */
  ]);

  return { data, error, pending, controller };
}

export const logErrors = <DTO>({
  whitelist = []
}: { whitelist?: number[] } = {}) => {
  return (fetchResponse: FetchResponse<DTO>) => {
    const { error } = fetchResponse;

    if (error && (!error.status || !whitelist.includes(error.status))) {
      window.console.warn("sentry:", error.message);
    }

    return fetchResponse;
  };
};
