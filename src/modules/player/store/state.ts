import { CurrentlyPlaying } from "values";

export interface PlayerState {
  currentlyPlaying: CurrentlyPlaying | null;
  currentlyPlayingError: any;
  isCurrentlyPlayingLoading: boolean;
}

export const initialState: PlayerState = {
  currentlyPlaying: null,
  currentlyPlayingError: null,
  isCurrentlyPlayingLoading: false
};
