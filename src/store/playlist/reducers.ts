import {
  PlaylistSimplified,
  PlaylistFull
} from "modules/playlist/models/playlist";
import { Pagination } from "modules/shared/models/paging";
import * as Actions from "./actions";

export interface PlaylistState {
  playlists: PlaylistSimplified[];
  playlistsError: any;
  playlistsPagination: Pagination | null;
  arePlaylistsPending: boolean;
  playlist: PlaylistFull | null;
  playlistPending: boolean;
  playlistError: any;
}

const initialState: PlaylistState = {
  playlists: [],
  playlistsError: null,
  arePlaylistsPending: false,
  playlistsPagination: null,
  playlist: null,
  playlistError: null,
  playlistPending: false
};

export const playlistReducer = (
  state: PlaylistState = initialState,
  action: Actions.PlaylistActionTypes
): PlaylistState => {
  switch (action.type) {
    case Actions.GET_PLAYLISTS:
      return {
        ...state,
        arePlaylistsPending: true
      };
    case Actions.GET_PLAYLISTS_SUCCESS: {
      const { items, ...pagination } = action.payload;

      return {
        ...state,
        playlists: items,
        arePlaylistsPending: false,
        playlistsPagination: pagination
      };
    }
    case Actions.GET_PLAYLISTS_FAILURE:
      return {
        ...state,
        playlistsError: action.payload,
        arePlaylistsPending: false
      };
    case Actions.GET_PLAYLIST: {
      return {
        ...state,
        playlistPending: true
      };
    }
    case Actions.GET_PLAYLIST_SUCCESS:
      return {
        ...state,
        playlist: action.payload,
        playlistPending: false
      };
    case Actions.GET_PLAYLIST_FAILURE:
      return {
        ...state,
        playlistError: action.payload,
        playlistPending: false
      };

    default:
      return state;
  }
};
