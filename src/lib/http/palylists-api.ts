import { PlaylistFull } from "modules/playlist/models/playlist";
import { httpGet } from "lib/http/api";

function getPlaylist(playlistId: string): Promise<PlaylistFull> {
  return httpGet<PlaylistFull>(`/playlists/${playlistId}`);
}

export const PLAYLISTS_API = {
  getPlaylist
};
