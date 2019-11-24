import { Category } from "lib/types/category";
import { Paginated } from "lib/types/paging";
import { AC } from "modules/shared/utils/action-creator";

export const GET_CATEGORIES_TYPE = "[CATEGORIES] GET CATEGORIES";
export const getCategories = (offset: number) =>
  AC(GET_CATEGORIES_TYPE, offset);
export type GetCategoriesAction = ReturnType<typeof getCategories>;

export const GET_CATEGORIES_SUCCESS_TYPE =
  "[CATEGORIES] GET CATEGORIES SUCCESS";
export const getCategoriesSuccess = (payload: Paginated<Category>) =>
  AC(GET_CATEGORIES_SUCCESS_TYPE, payload);
export type GetCategoriesSuccessAction = ReturnType<
  typeof getCategoriesSuccess
>;

export const GET_CATEGORIES_FAILURE_TYPE =
  "[CATEGORIES] GET CATEGORIES FAILURE";
export const getCategoriesFailure = (payload: any) =>
  AC(GET_CATEGORIES_FAILURE_TYPE, payload);
export type GetCategoriesFailureAction = ReturnType<
  typeof getCategoriesFailure
>;

export type CategoriesActionTypes =
  | GetCategoriesAction
  | GetCategoriesSuccessAction
  | GetCategoriesFailureAction;
