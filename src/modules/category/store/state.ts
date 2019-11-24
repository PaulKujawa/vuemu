import { Category } from "lib/types/category";
import { Pagination } from "lib/types/paging";

export interface CategoryState {
  categories: Category[];
  categoriesError: any;
  categoriesPagination: Pagination | null;
  areCategoriesPending: boolean;
  category: Category | null;
  categoryError: any;
  isCategoryPending: boolean;
}

export const initialState: CategoryState = {
  categories: [],
  categoriesError: null,
  categoriesPagination: null,
  areCategoriesPending: false,
  category: null,
  categoryError: null,
  isCategoryPending: false
};
