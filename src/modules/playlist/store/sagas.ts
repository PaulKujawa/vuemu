import { call, put, takeLatest } from "@redux-saga/core/effects";
import * as Actions from "modules/playlist/store/actions";
import { PLAYLISTS_API } from "lib/http/palylists-api";
import { PlaylistFull } from "lib/types";

function* getPlaylistSaga({ payload }: Actions.GetPlaylistAction) {
  try {
    const playlist: PlaylistFull = yield call(
      PLAYLISTS_API.getPlaylist,
      payload
    );

    yield put(Actions.getPlaylistSuccess(playlist));
  } catch (err) {
    yield put(Actions.getPlaylistFailure(err));
  }
}

export const playlistSagas = [
  takeLatest(Actions.GET_PLAYLIST_TYPE, getPlaylistSaga)
];
