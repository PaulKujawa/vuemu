import { httpGet } from "http/api";
import { buildQueryParams } from "http/utils";
import { Category } from "models/category";
import { Paginated } from "models/paging";
import { PlaylistSimplified } from "models/playlist";

async function getCategories(): Promise<Paginated<Category>> {
  const query = buildQueryParams({ limit: 50 });

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
  categoryId: string
): Promise<Paginated<PlaylistSimplified>> {
  const data = await httpGet<{ playlists: Paginated<PlaylistSimplified> }>(
    `/browse/categories/${categoryId}/playlists`
  );

  return data.playlists;
}

export const BROWSER_API = {
  getCategories,
  getCategory,
  getPlaylists
};
