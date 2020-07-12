import { Category, Pagination, PlaylistSimplified } from "values";

export interface CategoryState {
  category: Category | null;
  categoryError: any;
  isCategoryLoading: boolean;
  playlists: PlaylistSimplified[];
  playlistsError: any;
  playlistsPagination: Pagination | null;
  arePlaylistsLoading: boolean;
}

export const initialState: CategoryState = {
  category: null,
  categoryError: null,
  isCategoryLoading: false,
  playlists: [],
  playlistsError: null,
  arePlaylistsLoading: false,
  playlistsPagination: null
};
