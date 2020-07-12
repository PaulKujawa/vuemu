import { fetchClient } from "lib/http/api-methods";
import { Category, Paginated, PlaylistSimplified } from "values";
import { buildQueryParams } from "modules/shared";

async function getCategories(offset: number): Promise<Paginated<Category>> {
  const query = buildQueryParams({ offset });

  const data = await fetchClient.getData<{ categories: Paginated<Category> }>(
    `/browse/categories?${query}`
  );

  return data!.categories;
}

async function getCategory(id: string): Promise<Category> {
  const category = await fetchClient.getData<Category>(
    `/browse/categories/${id}`
  );

  return category!;
}

async function getPlaylists(
  categoryId: string,
  offset: number
): Promise<Paginated<PlaylistSimplified>> {
  const query = buildQueryParams({ offset });

  const data = await fetchClient.getData<{
    playlists: Paginated<PlaylistSimplified>;
  }>(`/browse/categories/${categoryId}/playlists?${query}`);

  return data!.playlists;
}

export const BROWSER_API = {
  getCategories,
  getCategory,
  getPlaylists
};
