import { PlaylistSimplified, PlaylistFull } from "lib/types/playlist";
import { Pagination } from "lib/types/paging";

export interface PlaylistState {
  playlists: PlaylistSimplified[];
  playlistsError: any;
  playlistsPagination: Pagination | null;
  arePlaylistsPending: boolean;
  playlist: PlaylistFull | null;
  playlistPending: boolean;
  playlistError: any;
}

export const initialState: PlaylistState = {
  playlists: [],
  playlistsError: null,
  arePlaylistsPending: false,
  playlistsPagination: null,
  playlist: null,
  playlistError: null,
  playlistPending: false
};
