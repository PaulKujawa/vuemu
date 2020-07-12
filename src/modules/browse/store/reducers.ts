import { BrowseActions, BrowseState, initialState } from ".";

export const browseReducer = (
  state: BrowseState = initialState,
  action: BrowseActions.BrowseActionTypes
): BrowseState => {
  switch (action.type) {
    case BrowseActions.GET_CATEGORIES_TYPE:
      return {
        ...state,
        areCategoriesPending: true
      };
    case BrowseActions.GET_CATEGORIES_SUCCESS_TYPE: {
      const { items, ...pagination } = action.payload;

      return {
        ...state,
        categories: state.categories.concat(items),
        areCategoriesPending: false,
        categoriesPagination: pagination
      };
    }
    case BrowseActions.GET_CATEGORIES_FAILURE_TYPE:
      return {
        ...state,
        categoriesError: action.payload,
        areCategoriesPending: false
      };
    default:
      return state;
  }
};
