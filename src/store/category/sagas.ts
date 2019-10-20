import { takeEvery, call, put } from "@redux-saga/core/effects";
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

function* getCategoriesSaga() {
  try {
    const categories = yield call(BROWSER_API.getCategories);
    yield put(getCategoriesSuccess(categories));
  } catch (err) {
    yield put(getCategoriesFailure(err));
  }
}

function* getCategorySaga(action: GetCategoryAction) {
  try {
    const category = yield call(BROWSER_API.getCategory, action.payload);
    yield put(getCategorySuccess(category));
  } catch (err) {
    yield put(getCategoryFailure(err));
  }
}

export const categorySagas = [
  takeEvery(GET_CATEGORIES, getCategoriesSaga),
  takeEvery(GET_CATEGORY, getCategorySaga)
];
