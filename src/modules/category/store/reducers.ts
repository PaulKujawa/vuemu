import * as Actions from "./actions";
import { CategoryState, initialState } from "modules/category/store/state";

export const categoryReducer = (
  state: CategoryState = initialState,
  action: Actions.CategoryActionTypes
): CategoryState => {
  switch (action.type) {
    case Actions.GET_CATEGORY_TYPE: {
      return {
        ...state,
        isCategoryPending: true
      };
    }
    case Actions.GET_CATEGORY_SUCCESS_TYPE:
      return {
        ...state,
        category: action.payload,
        isCategoryPending: false
      };
    case Actions.GET_CATEGORY_FAILURE_TYPE:
      return {
        ...state,
        categoryError: action.payload,
        isCategoryPending: false
      };

    case Actions.GET_PLAYLISTS_TYPE:
      return {
        ...state,
        arePlaylistsPending: true
      };
    case Actions.GET_PLAYLISTS_SUCCESS_TYPE: {
      const { items, ...pagination } = action.payload;

      return {
        ...state,
        playlists: state.playlists.concat(items),
        arePlaylistsPending: false,
        playlistsPagination: pagination
      };
    }
    case Actions.GET_PLAYLISTS_FAILURE_TYPE:
      return {
        ...state,
        playlistsError: action.payload,
        arePlaylistsPending: false
      };
    case Actions.RESET_PLAYLISTS_TYPE:
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
