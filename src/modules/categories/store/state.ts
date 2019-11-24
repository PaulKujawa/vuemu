import { Category, Pagination } from "lib/types";

export interface CategoriesState {
  categories: Category[];
  categoriesError: any;
  categoriesPagination: Pagination | null;
  areCategoriesPending: boolean;
}

export const initialState: CategoriesState = {
  categories: [],
  categoriesError: null,
  categoriesPagination: null,
  areCategoriesPending: false
};
