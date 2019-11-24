import { call, put, takeLatest } from "@redux-saga/core/effects";
import { BROWSER_API } from "lib/http/browse-api";
import * as Actions from "modules/category/store/actions";
import { Category, Paginated, PlaylistSimplified } from "lib/types";

function* getCategorySaga({ payload }: Actions.GetCategoryAction) {
  try {
    const category: Category = yield call(BROWSER_API.getCategory, payload);

    yield put(Actions.getCategorySuccess(category));
    yield put(Actions.resetPlaylists());
  } catch (err) {
    yield put(Actions.getCategoryFailure(err));
  }
}

function* getPlaylistsSaga({ payload }: Actions.GetPlaylistsAction) {
  try {
    const playlists: Paginated<PlaylistSimplified> = yield call(
      BROWSER_API.getPlaylists,
      payload.categoryId,
      payload.offset
    );

    yield put(Actions.getPlaylistsSuccess(playlists));
  } catch (err) {
    yield put(Actions.getPlaylistsFailure(err));
  }
}

export const categorySagas = [
  takeLatest(Actions.GET_CATEGORY_TYPE, getCategorySaga),
  takeLatest(Actions.GET_PLAYLISTS_TYPE, getPlaylistsSaga)
];
