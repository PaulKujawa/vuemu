import { httpGet } from "lib/http/api";
import { buildQueryParams } from "lib/http/utils";
import { Category } from "modules/category/models/category";
import { Paginated } from "modules/shared/models/paging";
import { PlaylistSimplified } from "modules/playlist/models/playlist";

async function getCategories(offset: number): Promise<Paginated<Category>> {
  const query = buildQueryParams({ offset });

  const data = await httpGet<{ categories: Paginated<Category> }>(
    `/browse/categories?${query}`
  );

  return data.categories;
}

// TODO ignoreErrors: [404]
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
