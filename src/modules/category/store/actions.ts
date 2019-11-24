import { Category } from "modules/category/models/category";
import { Paginated } from "modules/shared/models/paging";
import { AC } from "modules/shared/utils/action-creator";

export const GET_CATEGORIES_TYPE = "[CATEGORY] GET CATEGORIES";
export const getCategories = (offset: number) =>
  AC(GET_CATEGORIES_TYPE, offset);
export type GetCategoriesAction = ReturnType<typeof getCategories>;

export const GET_CATEGORIES_SUCCESS_TYPE = "[CATEGORY] GET CATEGORIES SUCCESS";
export const getCategoriesSuccess = (payload: Paginated<Category>) =>
  AC(GET_CATEGORIES_SUCCESS_TYPE, payload);
export type GetCategoriesSuccessAction = ReturnType<
  typeof getCategoriesSuccess
>;

export const GET_CATEGORIES_FAILURE_TYPE = "[CATEGORY] GET CATEGORIES FAILURE";
export const getCategoriesFailure = (payload: any) =>
  AC(GET_CATEGORIES_FAILURE_TYPE, payload);
export type GetCategoriesFailureAction = ReturnType<
  typeof getCategoriesFailure
>;

export const GET_CATEGORY_TYPE = "[CATEGORY] GET CATEGORY";
export const getCategory = (id: string) => AC(GET_CATEGORY_TYPE, id);
export type GetCategoryAction = ReturnType<typeof getCategory>;

export const GET_CATEGORY_SUCCESS_TYPE = "[CATEGORY] GET CATEGORY SUCCESS";
export const getCategorySuccess = (payload: Category) =>
  AC(GET_CATEGORY_SUCCESS_TYPE, payload);
export type GetCategorySuccessAction = ReturnType<typeof getCategorySuccess>;

export const GET_CATEGORY_FAILURE_TYPE = "[CATEGORY] GET CATEGORY FAILURE";
export const getCategoryFailure = (payload: any) =>
  AC(GET_CATEGORY_FAILURE_TYPE, payload);
export type GetCategoryFailureAction = ReturnType<typeof getCategoryFailure>;

export type CategoryActionTypes =
  | GetCategoriesAction
  | GetCategoriesSuccessAction
  | GetCategoriesFailureAction
  | GetCategoryAction
  | GetCategorySuccessAction
  | GetCategoryFailureAction;
