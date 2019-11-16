import { call, put, takeLatest } from "@redux-saga/core/effects";
import { BROWSER_API } from "lib/http/browse-api";
import * as Actions from "modules/category/store/actions";
import { Paginated } from "modules/shared/models/paging";
import { Category } from "modules/category/models/category";

function* getCategoriesSaga() {
  try {
    const categories: Paginated<Category> = yield call(
      BROWSER_API.getCategories
    );

    yield put(Actions.getCategoriesSuccess(categories));
  } catch (err) {
    yield put(Actions.getCategoriesFailure(err));
  }
}

function* getCategorySaga(action: Actions.GetCategoryAction) {
  try {
    const category: Category = yield call(
      BROWSER_API.getCategory,
      action.payload
    );

    yield put(Actions.getCategorySuccess(category));
  } catch (err) {
    yield put(Actions.getCategoryFailure(err));
  }
}

export const categorySagas = [
  takeLatest(Actions.GET_CATEGORIES_TYPE, getCategoriesSaga),
  takeLatest(Actions.GET_CATEGORY_TYPE, getCategorySaga)
];
