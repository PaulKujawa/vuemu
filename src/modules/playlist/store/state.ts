import { PlaylistFull } from "lib/types";

// module is unused for now

export interface PlaylistState {
  playlist: PlaylistFull | null;
  playlistPending: boolean;
  playlistError: any;
}

export const initialState: PlaylistState = {
  playlist: null,
  playlistError: null,
  playlistPending: false
};
