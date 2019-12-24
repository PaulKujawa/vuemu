import { Category, Pagination } from "lib/types";

export interface BrowseState {
  categories: Category[];
  categoriesError: any;
  categoriesPagination: Pagination | null;
  areCategoriesPending: boolean;
}

export const initialState: BrowseState = {
  categories: [],
  categoriesError: null,
  categoriesPagination: null,
  areCategoriesPending: false
};
