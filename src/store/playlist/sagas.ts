import { call, put, takeLatest } from "@redux-saga/core/effects";
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
import { PlaylistFull, PlaylistSimplified } from "models/playlist";
import { Paginated } from "models/paging";

function* getPlaylistsSaga(action: GetPlaylistsAction) {
  try {
    const playlists: Paginated<PlaylistSimplified> = yield call(
      BROWSER_API.getPlaylists,
      action.payload
    );

    yield put(getPlaylistsSuccess(playlists));
  } catch (err) {
    yield put(getPlaylistsFailure(err));
  }
}

function* getPlaylistSaga(action: GetPlaylistAction) {
  try {
    const playlist: PlaylistFull = yield call(
      PLAYLISTS_API.getPlaylist,
      action.payload
    );

    yield put(getPlaylistSuccess(playlist));
  } catch (err) {
    yield put(getPlaylistFailure(err));
  }
}

export const playlistSagas = [
  takeLatest(GET_PLAYLISTS, getPlaylistsSaga),
  takeLatest(GET_PLAYLIST, getPlaylistSaga)
];
