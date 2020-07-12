import { PlayerActions, PlayerState, initialState } from ".";

export const playerReducer = (
  state: PlayerState = initialState,
  action: PlayerActions.PlayerActionTypes
): PlayerState => {
  switch (action.type) {
    case PlayerActions.GET_CURRENTLY_PLAYING_TYPE:
      return { ...state, isCurrentlyPlayingLoading: true };
    case PlayerActions.GET_CURRENTLY_PLAYING_SUCCESS_TYPE:
      return {
        ...state,
        currentlyPlaying: action.payload,
        isCurrentlyPlayingLoading: false
      };
    case PlayerActions.GET_CURRENTLY_PLAYING_FAILURE_TYPE:
      return {
        ...state,
        currentlyPlayingError: action.payload,
        isCurrentlyPlayingLoading: false
      };
    default:
      return state;
  }
};
