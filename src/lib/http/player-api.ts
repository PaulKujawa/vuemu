import { CurrentlyPlaying } from "values";
import { fetchClient } from "./api-methods";

/*
 * alternatively, Spotify's SDK could be used to play encrypted songs via the browser
 * https://developer.spotify.com/documentation/web-playback-sdk/quick-start
 */

function getCurrentlyPlaying(): Promise<CurrentlyPlaying | null> {
  return fetchClient.getData<CurrentlyPlaying>(`/me/player/currently-playing`);
}

interface PlayParameters {
  contextUri?: string;
  offset?: { position: number } | { uri: string };
  positionMs?: number;
}

function play(config: PlayParameters = {}): Promise<null> {
  return fetchClient.putData(`/me/player/play`, config);
}

function pause(): Promise<null> {
  return fetchClient.putData(`/me/player/pause`, {});
}

function previous(): Promise<null> {
  return fetchClient.putData(`/me/player/previous`, {});
}

function next(): Promise<null> {
  return fetchClient.putData(`/me/player/previous`, {});
}

export const PLAYER_API = {
  getCurrentlyPlaying,
  next,
  pause,
  play,
  previous
};
