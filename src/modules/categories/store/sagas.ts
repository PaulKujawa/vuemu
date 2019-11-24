import { call, put, takeLatest } from "@redux-saga/core/effects";
import { BROWSER_API } from "lib/http/browse-api";
import * as Actions from "modules/categories/store/actions";
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

export const categoriesSagas = [
  takeLatest(Actions.GET_CATEGORIES_TYPE, getCategoriesSaga)
];
