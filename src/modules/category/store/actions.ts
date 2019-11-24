import { Category } from "lib/types/category";
import { AC } from "modules/shared/utils/action-creator";

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
  | GetCategoryAction
  | GetCategorySuccessAction
  | GetCategoryFailureAction;
