import { CurrentlyPlaying } from "values";
import { fetchClient } from "lib/http/api-methods";

function getCurrentlyPlayingTrack(): Promise<CurrentlyPlaying | null> {
  return fetchClient.getData<CurrentlyPlaying>(`/me/player/currently-playing`);
}

function play(): Promise<null> {
  return fetchClient.getData(`/me/player/play`);
}

function pause(): Promise<null> {
  return fetchClient.getData(`/me/player/pause`);
}

function previous(): Promise<null> {
  return fetchClient.getData(`/me/player/previous`);
}

function next(): Promise<null> {
  return fetchClient.getData(`/me/player/previous`);
}

export const PLAYER_API = {
  getCurrentlyPlayingTrack,
  next,
  pause,
  play,
  previous
};
