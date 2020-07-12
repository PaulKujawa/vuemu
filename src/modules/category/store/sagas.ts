import { call, put, takeLatest } from "@redux-saga/core/effects";
import { BROWSER_API } from "lib/http/browse-api";
import { Category, Paginated, PlaylistSimplified } from "values";
import { CategoryActions } from ".";

export function* getCategorySaga({
  payload
}: CategoryActions.GetCategoryAction) {
  try {
    const category: Category = yield call(BROWSER_API.getCategory, payload);

    yield put(CategoryActions.getCategorySuccess(category));
    yield put(CategoryActions.resetPlaylists());
  } catch (err) {
    yield put(CategoryActions.getCategoryFailure(err));
  }
}

function* getPlaylistsSaga({ payload }: CategoryActions.GetPlaylistsAction) {
  try {
    const playlists: Paginated<PlaylistSimplified> = yield call(
      BROWSER_API.getPlaylists,
      payload.categoryId,
      payload.offset
    );

    yield put(CategoryActions.getPlaylistsSuccess(playlists));
  } catch (err) {
    yield put(CategoryActions.getPlaylistsFailure(err));
  }
}

export const categorySagas = [
  takeLatest(CategoryActions.GET_CATEGORY_TYPE, getCategorySaga),
  takeLatest(CategoryActions.GET_PLAYLISTS_TYPE, getPlaylistsSaga)
];
