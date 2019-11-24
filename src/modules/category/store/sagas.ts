import { call, put, takeLatest } from "@redux-saga/core/effects";
import { BROWSER_API } from "lib/http/browse-api";
import * as Actions from "modules/category/store/actions";
import { Paginated } from "lib/types/paging";
import { Category } from "lib/types/category";

function* getCategoriesSaga({ payload }: Actions.GetCategoriesAction) {
  try {
    const categories: Paginated<Category> = yield call(
      BROWSER_API.getCategories,
      payload
    );

    yield put(Actions.getCategoriesSuccess(categories));
  } catch (err) {
    yield put(Actions.getCategoriesFailure(err));
  }
}

function* getCategorySaga({ payload }: Actions.GetCategoryAction) {
  try {
    const category: Category = yield call(BROWSER_API.getCategory, payload);

    yield put(Actions.getCategorySuccess(category));
  } catch (err) {
    yield put(Actions.getCategoryFailure(err));
  }
}

export const categorySagas = [
  takeLatest(Actions.GET_CATEGORIES_TYPE, getCategoriesSaga),
  takeLatest(Actions.GET_CATEGORY_TYPE, getCategorySaga)
];
