import { CurrentlyPlaying } from "lib/types";
import { httpGet } from "lib/http/api-methods";

function getCurrentlyPlayingTrack(): Promise<CurrentlyPlaying | null> {
  return httpGet<CurrentlyPlaying>(`/me/player/currently-playing`);
}

function play(): Promise<null> {
  return httpGet(`/me/player/play`);
}

function pause(): Promise<null> {
  return httpGet(`/me/player/pause`);
}

function previous(): Promise<null> {
  return httpGet(`/me/player/previous`);
}

function next(): Promise<null> {
  return httpGet(`/me/player/previous`);
}

export const PLAYER_API = {
  getCurrentlyPlayingTrack,
  next,
  pause,
  play,
  previous
};
