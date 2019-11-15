import { PlaylistSimplified } from "modules/playlist/models/playlist";
import { Paginated } from "modules/shared/models/paging";
import { AC } from "store/util";

export const GET_PLAYLISTS = "[PLAYLIST] GET PLAYLISTS";
export const getPlaylists = (categoryId: string) =>
  AC(GET_PLAYLISTS, categoryId);
export type GetPlaylistsAction = ReturnType<typeof getPlaylists>;

export const GET_PLAYLISTS_SUCCESS = "[PLAYLIST] GET PLAYLISTS SUCCESS";
export const getPlaylistsSuccess = (payload: Paginated<PlaylistSimplified>) =>
  AC(GET_PLAYLISTS_SUCCESS, payload);
export type GetPlaylistsSuccessAction = ReturnType<typeof getPlaylistsSuccess>;

export const GET_PLAYLISTS_FAILURE = "[PLAYLIST] GET PLAYLISTS FAILURE";
export const getPlaylistsFailure = (payload: any) =>
  AC(GET_PLAYLISTS_FAILURE, payload);
export type GetPlaylistsFailureAction = ReturnType<typeof getPlaylistsFailure>;

export const GET_PLAYLIST = "[PLAYLIST] GET PLAYLIST";
export const getPlaylist = (id: string) => AC(GET_PLAYLIST, id);
export type GetPlaylistAction = ReturnType<typeof getPlaylist>;

export const GET_PLAYLIST_SUCCESS = "[PLAYLIST] GET PLAYLIST SUCCESS";
export const getPlaylistSuccess = (payload: PlaylistSimplified) =>
  AC(GET_PLAYLIST_SUCCESS, payload);
export type GetPlaylistSuccessAction = ReturnType<typeof getPlaylistSuccess>;

export const GET_PLAYLIST_FAILURE = "[PLAYLIST] GET PLAYLIST FAILURE";
export const getPlaylistFailure = (payload: any) =>
  AC(GET_PLAYLIST_FAILURE, payload);
export type GetPlaylistFailureAction = ReturnType<typeof getPlaylistFailure>;

export type PlaylistActionTypes =
  | GetPlaylistsAction
  | GetPlaylistsSuccessAction
  | GetPlaylistsFailureAction
  | GetPlaylistAction
  | GetPlaylistSuccessAction
  | GetPlaylistFailureAction;
