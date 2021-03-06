import {
  ExternalUrl,
  Image,
  UserPublic,
  PlaylistTrack,
  Paginated,
  Followers,
  PlaylistTrackDto
} from ".";

interface Playlist {
  collaborative: boolean;
  description: string | null;
  externalUrls: ExternalUrl;
  href: string;
  id: string;
  images: Image[];
  name: string;
  owner: UserPublic;
  public: boolean | null;
  snapshotId: string;
  type: "playlist";
  uri: string;
}

export interface PlaylistSimplified extends Playlist {
  tracks: {
    href: string;
    total: number;
  };
}

export interface PlaylistFullDto extends Playlist {
  followers: Followers;
  tracks: Paginated<PlaylistTrackDto>;
}

export interface PlaylistFull extends Playlist {
  followers: Followers;
  tracks: Paginated<PlaylistTrack>;
}

export const mapPlaylistFullDto = (
  playlistDto: PlaylistFullDto
): PlaylistFull => {
  return {
    ...playlistDto,
    tracks: {
      ...playlistDto.tracks,
      items: playlistDto.tracks.items
        .map(item => ({ ...item, addedAt: new Date(item.addedAt) }))
        .filter(item => item.track) as PlaylistTrack[]
    }
  };
};
