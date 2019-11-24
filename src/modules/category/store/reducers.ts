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

    default:
      return state;
  }
};
