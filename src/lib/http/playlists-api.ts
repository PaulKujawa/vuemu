import { PlaylistFull } from "values";
import { fetchClient } from "./api-methods";

async function getPlaylist(playlistId: string): Promise<PlaylistFull> {
  const playlist = await fetchClient.getData<PlaylistFull>(
    `/playlists/${playlistId}`
  );

  return playlist!;
}

export const PLAYLISTS_API = {
  getPlaylist
};
