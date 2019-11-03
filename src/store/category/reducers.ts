import { Category } from "models/category";
import { Pagination } from "models/paging";
import * as Actions from "./actions";

export interface CategoryState {
  categories: Category[];
  categoriesError: any;
  categoriesPagination: Pagination | null;
  areCategoriesPending: boolean;
  category: Category | null;
  categoryError: any;
  isCategoryPending: boolean;
}

const initialState: CategoryState = {
  categories: [],
  categoriesError: null,
  categoriesPagination: null,
  areCategoriesPending: false,
  category: null,
  categoryError: null,
  isCategoryPending: false
};

export const categoryReducer = (
  state: CategoryState = initialState,
  action: Actions.CategoryActionTypes
): CategoryState => {
  switch (action.type) {
    case Actions.GET_CATEGORIES:
      return {
        ...state,
        areCategoriesPending: true
      };
    case Actions.GET_CATEGORIES_SUCCESS: {
      const { items, ...pagination } = action.payload;

      return {
        ...state,
        categories: items,
        areCategoriesPending: false,
        categoriesPagination: pagination
      };
    }
    case Actions.GET_CATEGORIES_FAILURE:
      return {
        ...state,
        categoriesError: action.payload,
        areCategoriesPending: false
      };
    case Actions.GET_CATEGORY: {
      return {
        ...state,
        isCategoryPending: true
      };
    }
    case Actions.GET_CATEGORY_SUCCESS:
      return {
        ...state,
        category: action.payload,
        isCategoryPending: false
      };
    case Actions.GET_CATEGORY_FAILURE:
      return {
        ...state,
        categoryError: action.payload,
        isCategoryPending: false
      };

    default:
      return state;
  }
};
