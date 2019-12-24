import { PlaylistFull } from "lib/types";
import { AC } from "modules/shared/utils/action-creator";

export const GET_PLAYLIST_TYPE = "[PLAYLIST] GET PLAYLIST";
export const getPlaylist = (id: string) => AC(GET_PLAYLIST_TYPE, id);
export type GetPlaylistAction = ReturnType<typeof getPlaylist>;

export const GET_PLAYLIST_SUCCESS_TYPE = "[PLAYLIST] GET PLAYLIST SUCCESS";
export const getPlaylistSuccess = (payload: PlaylistFull) =>
  AC(GET_PLAYLIST_SUCCESS_TYPE, payload);
export type GetPlaylistSuccessAction = ReturnType<typeof getPlaylistSuccess>;

export const GET_PLAYLIST_FAILURE_TYPE = "[PLAYLIST] GET PLAYLIST FAILURE";
export const getPlaylistFailure = (payload: any) =>
  AC(GET_PLAYLIST_FAILURE_TYPE, payload);
export type GetPlaylistFailureAction = ReturnType<typeof getPlaylistFailure>;

export type PlaylistActionTypes =
  | GetPlaylistAction
  | GetPlaylistSuccessAction
  | GetPlaylistFailureAction;
