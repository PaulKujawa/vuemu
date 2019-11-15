import {
  PlaylistSimplified,
  PlaylistFull
} from "modules/playlist/models/playlist";
import { Pagination } from "modules/shared/models/paging";

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
