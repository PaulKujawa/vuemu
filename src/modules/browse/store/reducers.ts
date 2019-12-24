import * as Actions from "./actions";
import { BrowseState, initialState } from "modules/browse/store/state";

export const browseReducer = (
  state: BrowseState = initialState,
  action: Actions.BrowseActionTypes
): BrowseState => {
  switch (action.type) {
    case Actions.GET_CATEGORIES_TYPE:
      return {
        ...state,
        areCategoriesPending: true
      };
    case Actions.GET_CATEGORIES_SUCCESS_TYPE: {
      const { items, ...pagination } = action.payload;

      return {
        ...state,
        categories: state.categories.concat(items),
        areCategoriesPending: false,
        categoriesPagination: pagination
      };
    }
    case Actions.GET_CATEGORIES_FAILURE_TYPE:
      return {
        ...state,
        categoriesError: action.payload,
        areCategoriesPending: false
      };
    default:
      return state;
  }
};
