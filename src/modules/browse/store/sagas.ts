import { call, put, takeLatest } from "@redux-saga/core/effects";
import { BROWSER_API } from "lib/http/browse-api";
import * as Actions from "modules/browse/store/actions";
import { Category, Paginated } from "lib/types";

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

export const browseSagas = [
  takeLatest(Actions.GET_CATEGORIES_TYPE, getCategoriesSaga)
];
