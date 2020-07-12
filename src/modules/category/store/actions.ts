import { Category, Paginated, PlaylistSimplified } from "values";
import { AC } from "modules/shared";

export const GET_CATEGORY_TYPE = "[CATEGORY] GET CATEGORY";
export const getCategory = (id: string) => AC(GET_CATEGORY_TYPE, id);
export type GetCategoryAction = ReturnType<typeof getCategory>;

export const GET_CATEGORY_SUCCESS_TYPE = "[CATEGORY] GET CATEGORY SUCCESS";
export const getCategorySuccess = (payload: Category) =>
  AC(GET_CATEGORY_SUCCESS_TYPE, payload);
export type GetCategorySuccessAction = ReturnType<typeof getCategorySuccess>;

export const GET_CATEGORY_FAILURE_TYPE = "[CATEGORY] GET CATEGORY FAILURE";
export const getCategoryFailure = (payload: any) =>
  AC(GET_CATEGORY_FAILURE_TYPE, payload);
export type GetCategoryFailureAction = ReturnType<typeof getCategoryFailure>;

export const GET_PLAYLISTS_TYPE = "[PLAYLIST] GET PLAYLISTS";
export const getPlaylists = (categoryId: string, offset: number) =>
  AC(GET_PLAYLISTS_TYPE, { categoryId, offset });
export type GetPlaylistsAction = ReturnType<typeof getPlaylists>;

export const GET_PLAYLISTS_SUCCESS_TYPE = "[PLAYLIST] GET PLAYLISTS SUCCESS";
export const getPlaylistsSuccess = (payload: Paginated<PlaylistSimplified>) =>
  AC(GET_PLAYLISTS_SUCCESS_TYPE, payload);
export type GetPlaylistsSuccessAction = ReturnType<typeof getPlaylistsSuccess>;

export const GET_PLAYLISTS_FAILURE_TYPE = "[PLAYLIST] GET PLAYLISTS FAILURE";
export const getPlaylistsFailure = (payload: any) =>
  AC(GET_PLAYLISTS_FAILURE_TYPE, payload);
export type GetPlaylistsFailureAction = ReturnType<typeof getPlaylistsFailure>;

export const RESET_PLAYLISTS_TYPE = "[PLAYLIST] RESET PLAYLISTS";
export const resetPlaylists = () => AC(RESET_PLAYLISTS_TYPE);
export type ResetPlaylistsAction = ReturnType<typeof resetPlaylists>;

export type CategoryActionTypes =
  | GetCategoryAction
  | GetCategorySuccessAction
  | GetCategoryFailureAction
  | GetPlaylistsAction
  | GetPlaylistsSuccessAction
  | GetPlaylistsFailureAction
  | ResetPlaylistsAction;
