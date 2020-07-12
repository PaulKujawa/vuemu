import { CurrentlyPlaying } from "values";
import { AC } from "modules/shared";

export const GET_CURRENTLY_PLAYING_TYPE = "[PLAYER] GET CURRENTLY PLAYING";
export const getCurrentlyPlaying = () => AC(GET_CURRENTLY_PLAYING_TYPE);
export type GetCurrentlyPlayingAction = ReturnType<typeof getCurrentlyPlaying>;

export const GET_CURRENTLY_PLAYING_SUCCESS_TYPE =
  "[PLAYER] GET CURRENTLY PLAYING SUCCESS";
export const getCurrentlyPlayingSuccess = (
  currentlyPlaying: CurrentlyPlaying
) => AC(GET_CURRENTLY_PLAYING_SUCCESS_TYPE, currentlyPlaying);
export type GetCurrentlyPlayingSuccessAction = ReturnType<
  typeof getCurrentlyPlayingSuccess
>;

export const GET_CURRENTLY_PLAYING_FAILURE_TYPE =
  "[PLAYER] GET CURRENTLY PLAYING ERROR";
export const getCurrentlyPlayingFailure = (error: any) =>
  AC(GET_CURRENTLY_PLAYING_FAILURE_TYPE, error);
export type GetCurrentlyPlayingFailureAction = ReturnType<
  typeof getCurrentlyPlayingFailure
>;

export const PLAY_TYPE = "[PLAYER] PLAY";
export const play = (config: {
  contextUri?: string;
  offset?: { position: number } | { uri: string };
  positionMs?: number;
}) => AC(PLAY_TYPE, config);
export type PlayAction = ReturnType<typeof play>;

export const PLAY_SUCCESS_TYPE = "[PLAYER] PLAY SUCCESS";
export const playSuccess = () => AC(PLAY_SUCCESS_TYPE);
export type PlaySuccessAction = ReturnType<typeof playSuccess>;

export const PLAY_FAILURE_TYPE = "[PLAYER] PLAY ERROR";
export const playFailure = (error: any) => AC(PLAY_FAILURE_TYPE, error);
export type PlayFailureAction = ReturnType<typeof playFailure>;

export type PlayerActionTypes =
  | GetCurrentlyPlayingAction
  | GetCurrentlyPlayingSuccessAction
  | GetCurrentlyPlayingFailureAction
  | PlayAction
  | PlaySuccessAction
  | PlayFailureAction;
