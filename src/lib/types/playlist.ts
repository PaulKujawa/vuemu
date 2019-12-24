import {
  ExternalUrl,
  Image,
  UserPublic,
  PlaylistTrack,
  Paginated,
  Followers
} from "lib/types";

interface Playlist {
  collaborative: boolean;
  description: string | null;
  external_urls: ExternalUrl;
  href: string;
  id: string;
  images: Image[];
  name: string;
  owner: UserPublic;
  public: boolean | null;
  snapshot_id: string;
  type: "playlist";
  uri: string;
}

export interface PlaylistSimplified extends Playlist {
  tracks: { href: string; total: number };
}

export interface PlaylistFull extends Playlist {
  followers: Followers;
  tracks: Paginated<PlaylistTrack>;
}
