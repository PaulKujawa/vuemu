import { PlaylistTrack, PlaylistFullDto, PlaylistFull } from "values";

export const playlistService = {
  mapPlaylistFullDto(playlistDto: PlaylistFullDto): PlaylistFull {
    return {
      ...playlistDto,
      tracks: {
        ...playlistDto.tracks,
        items: playlistDto.tracks.items
          .map(item => ({ ...item, addedAt: new Date(item.addedAt) }))
          .filter(item => item.track) as PlaylistTrack[]
      }
    };
  }
};
