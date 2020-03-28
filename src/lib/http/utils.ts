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
