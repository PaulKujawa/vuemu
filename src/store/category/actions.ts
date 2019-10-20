import { Category } from "models/category";
import { Paginated } from "models/paging";
import { AC } from "store/util";

export const GET_CATEGORIES = "[CATEGORY] GET CATEGORIES";
export const getCategories = () => AC(GET_CATEGORIES, undefined);
export type GetCategoriesAction = ReturnType<typeof getCategories>;

export const GET_CATEGORIES_SUCCESS = "[CATEGORY] GET CATEGORIES SUCCESS";
export const getCategoriesSuccess = (payload: Paginated<Category>) =>
  AC(GET_CATEGORIES_SUCCESS, payload);
export type GetCategoriesSuccessAction = ReturnType<
  typeof getCategoriesSuccess
>;

export const GET_CATEGORIES_FAILURE = "[CATEGORY] GET CATEGORIES FAILURE";
export const getCategoriesFailure = (payload: any) =>
  AC(GET_CATEGORIES_FAILURE, payload);
export type GetCategoriesFailureAction = ReturnType<
  typeof getCategoriesFailure
>;

export const GET_CATEGORY = "[CATEGORY] GET CATEGORY";
export const getCategory = (id: string) => AC(GET_CATEGORY, id);
export type GetCategoryAction = ReturnType<typeof getCategory>;

export const GET_CATEGORY_SUCCESS = "[CATEGORY] GET CATEGORY SUCCESS";
export const getCategorySuccess = (payload: Category) =>
  AC(GET_CATEGORY_SUCCESS, payload);
export type GetCategorySuccessAction = ReturnType<typeof getCategorySuccess>;

export const GET_CATEGORY_FAILURE = "[CATEGORY] GET CATEGORY FAILURE";
export const getCategoryFailure = (payload: any) =>
  AC(GET_CATEGORY_FAILURE, payload);
export type GetCategoryFailureAction = ReturnType<typeof getCategoryFailure>;

export type CategoryActionTypes =
  | GetCategoriesAction
  | GetCategoriesSuccessAction
  | GetCategoriesFailureAction
  | GetCategoryAction
  | GetCategorySuccessAction
  | GetCategoryFailureAction;
