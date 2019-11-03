import { call, put, takeLatest } from "@redux-saga/core/effects";
import { BROWSER_API } from "http/browse-api";
import {
  getCategoriesSuccess,
  getCategoriesFailure,
  GetCategoryAction,
  getCategorySuccess,
  getCategoryFailure,
  GET_CATEGORIES,
  GET_CATEGORY
} from "store/category/actions";
import { Paginated } from "models/paging";
import { Category } from "models/category";

function* getCategoriesSaga() {
  try {
    const categories: Paginated<Category> = yield call(
      BROWSER_API.getCategories
    );

    yield put(getCategoriesSuccess(categories));
  } catch (err) {
    yield put(getCategoriesFailure(err));
  }
}

function* getCategorySaga(action: GetCategoryAction) {
  try {
    const category: Category = yield call(
      BROWSER_API.getCategory,
      action.payload
    );

    yield put(getCategorySuccess(category));
  } catch (err) {
    yield put(getCategoryFailure(err));
  }
}

export const categorySagas = [
  takeLatest(GET_CATEGORIES, getCategoriesSaga),
  takeLatest(GET_CATEGORY, getCategorySaga)
];
