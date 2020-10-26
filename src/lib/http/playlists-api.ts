import { PlaylistFullDto } from "values";
import { fetchClient } from "./api-methods";

async function getPlaylist(playlistId: string): Promise<PlaylistFullDto> {
  const playlist = await fetchClient.getData<PlaylistFullDto>(
    `/playlists/${playlistId}`
  );

  return playlist!;
}

export const PLAYLISTS_API = {
  getPlaylist
};
