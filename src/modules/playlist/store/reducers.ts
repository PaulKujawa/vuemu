import { PlaylistActions, PlaylistState, initialState } from ".";

export const playlistReducer = (
  state: PlaylistState = initialState,
  action: PlaylistActions.PlaylistActionTypes
): PlaylistState => {
  switch (action.type) {
    case PlaylistActions.GET_PLAYLIST_TYPE: {
      return { ...state, isPlaylistLoading: true };
    }
    case PlaylistActions.GET_PLAYLIST_SUCCESS_TYPE:
      return { ...state, playlist: action.payload, isPlaylistLoading: false };
    case PlaylistActions.GET_PLAYLIST_FAILURE_TYPE:
      return {
        ...state,
        playlistError: action.payload,
        isPlaylistLoading: false
      };
    default:
      return state;
  }
};
