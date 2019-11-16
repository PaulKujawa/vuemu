import { call, put, takeLatest } from "@redux-saga/core/effects";
import { BROWSER_API } from "lib/http/browse-api";
import * as Actions from "modules/playlist/store/actions";
import { PLAYLISTS_API } from "lib/http/palylists-api";
import {
  PlaylistFull,
  PlaylistSimplified
} from "modules/playlist/models/playlist";
import { Paginated } from "modules/shared/models/paging";

function* getPlaylistsSaga(action: Actions.GetPlaylistsAction) {
  try {
    const playlists: Paginated<PlaylistSimplified> = yield call(
      BROWSER_API.getPlaylists,
      action.payload
    );

    yield put(Actions.getPlaylistsSuccess(playlists));
  } catch (err) {
    yield put(Actions.getPlaylistsFailure(err));
  }
}

function* getPlaylistSaga(action: Actions.GetPlaylistAction) {
  try {
    const playlist: PlaylistFull = yield call(
      PLAYLISTS_API.getPlaylist,
      action.payload
    );

    yield put(Actions.getPlaylistSuccess(playlist));
  } catch (err) {
    yield put(Actions.getPlaylistFailure(err));
  }
}

export const playlistSagas = [
  takeLatest(Actions.GET_PLAYLISTS_TYPE, getPlaylistsSaga),
  takeLatest(Actions.GET_PLAYLIST_TYPE, getPlaylistSaga)
];
