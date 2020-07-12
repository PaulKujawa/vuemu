import { call, put, takeLatest } from "@redux-saga/core/effects";
import { PLAYLISTS_API } from "lib/http/playlists-api";
import { PlaylistFullDto } from "values";
import { playlistService } from "..";
import { PlaylistActions } from ".";

function* getPlaylistSaga({ payload }: PlaylistActions.GetPlaylistAction) {
  try {
    const playlistDto: PlaylistFullDto = yield call(
      PLAYLISTS_API.getPlaylist,
      payload
    );

    const playlist = playlistService.mapPlaylistFullDto(playlistDto);

    yield put(PlaylistActions.getPlaylistSuccess(playlist));
  } catch (err) {
    yield put(PlaylistActions.getPlaylistFailure(err));
  }
}

export const playlistSagas = [
  takeLatest(PlaylistActions.GET_PLAYLIST_TYPE, getPlaylistSaga)
];
