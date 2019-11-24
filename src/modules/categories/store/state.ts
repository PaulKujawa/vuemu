import { Category } from "lib/types/category";
import { Pagination } from "lib/types/paging";

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
