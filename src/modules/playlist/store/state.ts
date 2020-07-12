import { PlaylistFull } from "values";

export interface PlaylistState {
  playlist: PlaylistFull | null;
  playlistError: any;
  isPlaylistLoading: boolean;
}

export const initialState: PlaylistState = {
  playlist: null,
  playlistError: null,
  isPlaylistLoading: false
};
