import { call, put, takeLatest } from "@redux-saga/core/effects";
import { PLAYLISTS_API } from "lib/http/palylists-api";
import { PlaylistFullDto } from "lib/types";
import * as Actions from "modules/playlist/store/actions";
import { mapPlaylistFullDto } from "modules/playlist/utils/track";

function* getPlaylistSaga({ payload }: Actions.GetPlaylistAction) {
  try {
    const playlistDto: PlaylistFullDto = yield call(
      PLAYLISTS_API.getPlaylist,
      payload
    );

    const playlist = mapPlaylistFullDto(playlistDto);

    yield put(Actions.getPlaylistSuccess(playlist));
  } catch (err) {
    yield put(Actions.getPlaylistFailure(err));
  }
}

export const playlistSagas = [
  takeLatest(Actions.GET_PLAYLIST_TYPE, getPlaylistSaga)
];
