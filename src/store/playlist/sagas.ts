import { takeEvery, call, put } from "@redux-saga/core/effects";
import { BROWSER_API } from "http/browse-api";
import {
  getPlaylistsSuccess,
  getPlaylistsFailure,
  GetPlaylistAction,
  getPlaylistSuccess,
  getPlaylistFailure,
  GET_PLAYLISTS,
  GET_PLAYLIST,
  GetPlaylistsAction
} from "store/playlist/actions";
import { PLAYLISTS_API } from "http/palylists-api";

function* getPlaylistsSaga(action: GetPlaylistsAction) {
  try {
    const playlists = yield call(BROWSER_API.getPlaylists, action.payload);
    yield put(getPlaylistsSuccess(playlists));
  } catch (err) {
    yield put(getPlaylistsFailure(err));
  }
}

function* getPlaylistSaga(action: GetPlaylistAction) {
  try {
    const playlist = yield call(PLAYLISTS_API.getPlaylist, action.payload);
    yield put(getPlaylistSuccess(playlist));
  } catch (err) {
    yield put(getPlaylistFailure(err));
  }
}

export const playlistSagas = [
  takeEvery(GET_PLAYLISTS, getPlaylistsSaga),
  takeEvery(GET_PLAYLIST, getPlaylistSaga)
];
