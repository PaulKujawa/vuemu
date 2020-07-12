import { call, put, takeLatest } from "@redux-saga/core/effects";
import { BROWSER_API } from "lib/http/browse-api";
import { Category, Paginated } from "values";
import { BrowseActions } from ".";

function* getCategoriesSaga({ payload }: BrowseActions.GetCategoriesAction) {
  try {
    const categories: Paginated<Category> = yield call(
      BROWSER_API.getCategories,
      payload
    );

    yield put(BrowseActions.getCategoriesSuccess(categories));
  } catch (err) {
    yield put(BrowseActions.getCategoriesFailure(err));
  }
}

export const browseSagas = [
  takeLatest(BrowseActions.GET_CATEGORIES_TYPE, getCategoriesSaga)
];
