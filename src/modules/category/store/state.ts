import { Category } from "lib/types/category";

export interface CategoryState {
  category: Category | null;
  categoryError: any;
  isCategoryPending: boolean;
}

export const initialState: CategoryState = {
  category: null,
  categoryError: null,
  isCategoryPending: false
};
