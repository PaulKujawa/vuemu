import { CategoryState, initialState, CategoryActions } from ".";

export const categoryReducer = (
  state: CategoryState = initialState,
  action: CategoryActions.CategoryActionTypes
): CategoryState => {
  switch (action.type) {
    case CategoryActions.GET_CATEGORY_TYPE: {
      return { ...state, isCategoryLoading: true };
    }
    case CategoryActions.GET_CATEGORY_SUCCESS_TYPE:
      return { ...state, category: action.payload, isCategoryLoading: false };
    case CategoryActions.GET_CATEGORY_FAILURE_TYPE:
      return {
        ...state,
        categoryError: action.payload,
        isCategoryLoading: false
      };

    case CategoryActions.GET_PLAYLISTS_TYPE:
      return { ...state, arePlaylistsLoading: true };
    case CategoryActions.GET_PLAYLISTS_SUCCESS_TYPE: {
      const { items, ...pagination } = action.payload;

      return {
        ...state,
        playlists: state.playlists.concat(items),
        arePlaylistsLoading: false,
        playlistsPagination: pagination
      };
    }
    case CategoryActions.GET_PLAYLISTS_FAILURE_TYPE:
      return {
        ...state,
        playlistsError: action.payload,
        arePlaylistsLoading: false
      };
    case CategoryActions.RESET_PLAYLISTS_TYPE:
      return {
        ...state,
        playlists: initialState.playlists,
        playlistsError: initialState.playlistsError,
        playlistsPagination: initialState.playlistsPagination
      };
    default:
      return state;
  }
};
