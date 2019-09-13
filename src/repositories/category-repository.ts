import { Category, CategoryPaging } from "models/category";
import {
  FetchResponse,
  getSpotifyBaseUrl,
  mapSpotifyApi,
  logErrors,
  mapQueryParams,
  mapRequestInit,
  mapSpotifyEndpoint,
  useFetch,
  pipe,
  AbortableFetchResponse
} from "utils/http";

const cache: { [id: string]: Category } = {};

export function fetchCategories(): FetchResponse<CategoryPaging> {
  const fetchResponse: AbortableFetchResponse<CategoryPaging> = pipe(
    getSpotifyBaseUrl,
    mapSpotifyApi("browse"),
    mapSpotifyEndpoint("categories"),
    mapQueryParams({ limit: "40" }),
    mapRequestInit(),
    useFetch,
    logErrors()
  )();

  if (fetchResponse.data) {
    fetchResponse.data.categories.items.forEach(cat => {
      cache[cat.id] = cat;
    });
  }

  return fetchResponse;
}

export function fetchCategory(id: string): FetchResponse<Category> {
  if (cache[id]) {
    return {
      data: cache[id],
      error: null,
      pending: false
    };
  }

  return pipe(
    getSpotifyBaseUrl,
    mapSpotifyApi("browse"),
    mapSpotifyEndpoint("categories/" + id),
    mapRequestInit(),
    useFetch,
    logErrors({ whitelist: [404] })
  )();
}
