import {
  PlaylistTrack,
  PlaylistTrackDto,
  PlaylistFullDto,
  PlaylistFull
} from "lib/types";

function filterLinkedPlaylistTracks(
  tracks: PlaylistTrackDto[]
): PlaylistTrack[] {
  return tracks.filter(
    playlistTrack => playlistTrack.track !== null
  ) as PlaylistTrack[];
}

export function mapPlaylistFullDto(playlistDto: PlaylistFullDto): PlaylistFull {
  return {
    ...playlistDto,
    tracks: {
      ...playlistDto.tracks,
      items: filterLinkedPlaylistTracks(playlistDto.tracks.items)
    }
  };
}

// TODO unit tests
export function formatDuration(ms: number): string {
  const sec = Math.floor(ms / 1000);
  const minutes = Math.floor(sec / 60);
  const seconds = `0${sec % 60}`.slice(-2);

  return `${minutes}:${seconds}`;
}
