import { PlaylistFull } from "lib/types";

export interface PlaylistState {
  playlist: PlaylistFull | null;
  playlistError: any;
  isPlaylistPending: boolean;
}

export const initialState: PlaylistState = {
  playlist: null,
  playlistError: null,
  isPlaylistPending: false
};
