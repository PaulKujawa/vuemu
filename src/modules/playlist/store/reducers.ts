import * as Actions from "./actions";
import { PlaylistState, initialState } from "modules/playlist/store/state";

export const playlistReducer = (
  state: PlaylistState = initialState,
  action: Actions.PlaylistActionTypes
): PlaylistState => {
  switch (action.type) {
    case Actions.GET_PLAYLIST_TYPE: {
      return {
        ...state,
        isPlaylistPending: true
      };
    }
    case Actions.GET_PLAYLIST_SUCCESS_TYPE:
      return {
        ...state,
        playlist: action.payload,
        isPlaylistPending: false
      };
    case Actions.GET_PLAYLIST_FAILURE_TYPE:
      return {
        ...state,
        playlistError: action.payload,
        isPlaylistPending: false
      };

    default:
      return state;
  }
};
