import * as Actions from "./actions";
import { PlaylistState, initialState } from "modules/playlist/store/state";

export const playlistReducer = (
  state: PlaylistState = initialState,
  action: Actions.PlaylistActionTypes
): PlaylistState => {
  switch (action.type) {
    case Actions.GET_PLAYLISTS_TYPE:
      return {
        ...state,
        arePlaylistsPending: true
      };
    case Actions.GET_PLAYLISTS_SUCCESS_TYPE: {
      const { items, ...pagination } = action.payload;

      return {
        ...state,
        playlists: state.playlists.concat(items),
        arePlaylistsPending: false,
        playlistsPagination: pagination
      };
    }
    case Actions.GET_PLAYLISTS_FAILURE_TYPE:
      return {
        ...state,
        playlistsError: action.payload,
        arePlaylistsPending: false
      };
    case Actions.GET_PLAYLIST_TYPE: {
      return {
        ...state,
        playlistPending: true
      };
    }
    case Actions.GET_PLAYLIST_SUCCESS_TYPE:
      return {
        ...state,
        playlist: action.payload,
        playlistPending: false
      };
    case Actions.GET_PLAYLIST_FAILURE_TYPE:
      return {
        ...state,
        playlistError: action.payload,
        playlistPending: false
      };

    default:
      return state;
  }
};
