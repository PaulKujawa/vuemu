import { call, put, takeLatest } from "@redux-saga/core/effects";
import { CurrentlyPlaying } from "values";
import { PLAYER_API } from "lib/http/player-api";
import { PlayerActions } from ".";

function* getCurrentlyPlayingSaga({
  payload
}: PlayerActions.GetCurrentlyPlayingAction) {
  try {
    const playing: CurrentlyPlaying = yield call(
      PLAYER_API.getCurrentlyPlaying
    );

    yield put(PlayerActions.getCurrentlyPlayingSuccess(playing));
  } catch (err) {
    // TODO endpoint will return 404 for when no active device is found to play the song.
    // an alert should be shown asking the user to switch it on.

    yield put(PlayerActions.getCurrentlyPlayingFailure(err));
  }
}

function* playSaga({ payload }: PlayerActions.PlayAction) {
  try {
    yield call(PLAYER_API.play, payload);

    yield put(PlayerActions.playSuccess());
  } catch (err) {
    yield put(PlayerActions.playFailure(err));
  }
}

export const playerSagas = [
  takeLatest(
    [PlayerActions.GET_CURRENTLY_PLAYING_TYPE, PlayerActions.PLAY_SUCCESS_TYPE],
    getCurrentlyPlayingSaga
  ),
  takeLatest(PlayerActions.PLAY_TYPE, playSaga)
];
