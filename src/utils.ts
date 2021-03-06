import { format as dateFnsFormat, formatDistanceToNow } from "date-fns";
import { Action, AuthResponseSuccess, AuthToken, Paginated } from "values";

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

export function getFetchMore(curr: Paginated<unknown>) {
  return curr.next ? curr.offset + curr.limit : null;
}

// see https://stackoverflow.com/a/5002161/8466350
export function stripHtmlTags(text: string): string {
  return text.replace(/<\/?[^>]+(>|$)/g, "");
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

export function formatDuration(ms: number): string {
  const sec = Math.floor(ms / 1000);
  const minutes = Math.floor(sec / 60);
  const seconds = `0${sec % 60}`.slice(-2);

  return `${minutes}:${seconds}`;
}

export function formatDate(date: Date) {
  return dateFnsFormat(date, "dd/MM/yyyy");
  // return dayjs().format("{YYYY} MM-DDTHH:mm:ss SSS [Z] A");
}

export function timeBetweenThenAndNo(date: Date) {
  return formatDistanceToNow(date);
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
