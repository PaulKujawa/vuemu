import { PlaylistFull } from "lib/types";
import { httpGet } from "lib/http/api-methods";

async function getPlaylist(playlistId: string): Promise<PlaylistFull> {
  const playlist = await httpGet<PlaylistFull>(`/playlists/${playlistId}`);

  return playlist!;
}

export const PLAYLISTS_API = {
  getPlaylist
};
