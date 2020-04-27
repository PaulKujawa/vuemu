import { PlaylistFull } from "lib/types";
import { fetchClient } from "lib/http/api-methods";

async function getPlaylist(playlistId: string): Promise<PlaylistFull> {
  const playlist = await fetchClient.getData<PlaylistFull>(
    `/playlists/${playlistId}`
  );

  return playlist!;
}

export const PLAYLISTS_API = {
  getPlaylist
};
