import { Action, Pagination } from "values";

export function AC<T extends string, P>(type: T, payload: P): Action<T, P>;
export function AC<T extends string>(type: T): Action<T, undefined>;
export function AC<T extends string, P>(
  type: T,
  payload?: P
): Action<T, P | undefined> {
  return { type, payload };
}

export function buildQueryParams<T>(queryParams: T): string {
  const query = Object.entries(queryParams)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  return encodeURI(query);
}

export function composeApiUrl(path: string): string {
  const _path = path.startsWith("/") ? path.substring(1) : path;

  return `https://api.spotify.com/v1/${_path}`;
}

export function getNextBatchOffset(pagination: Pagination | null): number {
  if (!pagination) {
    return 0;
  }

  return pagination.offset + pagination.limit;
}

export function hasNextBatch(pagination: Pagination | null): boolean {
  return !pagination || !!pagination.next;
}

export function parseQuery<T extends object>(hash: string): T {
  return hash
    .substring(1)
    .split("&")
    .map(keyValue => keyValue.split("="))
    .reduce((acc: any, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});
}

export const webStorage = {
  getItem<T = string>(id: string): T | undefined {
    const stored = localStorage.getItem(id);

    if (stored) {
      return JSON.parse(stored);
    }
  },
  setItem<T>(id: string, value: T): void {
    const toBeStore = JSON.stringify(value);
    localStorage.setItem(id, toBeStore);
  },
  removeItem(id: string): void {
    localStorage.removeItem(id);
  }
};
