import { Category, Pagination, PlaylistSimplified } from "values";

export interface CategoryState {
  category: Category | null;
  categoryError: any;
  isCategoryPending: boolean;
  playlists: PlaylistSimplified[];
  playlistsError: any;
  playlistsPagination: Pagination | null;
  arePlaylistsPending: boolean;
}

export const initialState: CategoryState = {
  category: null,
  categoryError: null,
  isCategoryPending: false,
  playlists: [],
  playlistsError: null,
  arePlaylistsPending: false,
  playlistsPagination: null
};
