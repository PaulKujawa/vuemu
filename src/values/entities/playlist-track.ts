import { UserPublic, Track } from ".";

/*
 * `video_thumbnail` is not documented and seems to be never set
 * `track` being null makes no sense but happens. Spotify skips such songs themselves.
 */
export interface PlaylistTrackDto {
  addedAt: string; // Date
  addedBy: UserPublic;
  isLocal: boolean;
  primaryColor: string | null;
  track: Track | null;
  // video_thumbnail: { url: null } | null;
}

export interface PlaylistTrack {
  addedAt: Date;
  addedBy: UserPublic;
  isLocal: boolean;
  primaryColor: string | null;
  track: Track;
  // video_thumbnail: { url: null } | null;
}
