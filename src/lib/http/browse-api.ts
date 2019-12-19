import { httpGet } from "lib/http/api";
import { buildQueryParams } from "lib/http/utils";
import { Category, Paginated, PlaylistSimplified } from "lib/types";

async function getCategories(offset: number): Promise<Paginated<Category>> {
  const query = buildQueryParams({ offset });

  const data = await httpGet<{ categories: Paginated<Category> }>(
    `/browse/categories?${query}`
  );

  return data.categories;
}

function getCategory(id: string): Promise<Category> {
  return httpGet<Category>(`/browse/categories/${id}`);
}

async function getPlaylists(
  categoryId: string,
  offset: number
): Promise<Paginated<PlaylistSimplified>> {
  const query = buildQueryParams({ offset });

  const data = await httpGet<{ playlists: Paginated<PlaylistSimplified> }>(
    `/browse/categories/${categoryId}/playlists?${query}`
  );

  return data.playlists;
}

export const BROWSER_API = {
  getCategories,
  getCategory,
  getPlaylists
};
