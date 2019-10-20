import { PlaylistFull } from "models/playlist";
import { httpGet } from "http/api";

function getPlaylist(playlistId: string): Promise<PlaylistFull> {
  return httpGet<PlaylistFull>(`/playlists/${playlistId}`);
}

export const PLAYLISTS_API = {
  getPlaylist
};
