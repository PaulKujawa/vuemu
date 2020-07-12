import { Category, Pagination } from "values";

export interface BrowseState {
  categories: Category[];
  categoriesError: any;
  categoriesPagination: Pagination | null;
  areCategoriesLoading: boolean;
}

export const initialState: BrowseState = {
  categories: [],
  categoriesError: null,
  categoriesPagination: null,
  areCategoriesLoading: false
};
