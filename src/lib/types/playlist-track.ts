import { UserPublic, Track } from "lib/types";

/*
 * `video_thumbnail` is not documented and seems to be never set
 * `track` being null makes no sense but happens. Spotify skips such songs themselves.
 */
export interface PlaylistTrackDto {
  added_at: Date;
  added_by: UserPublic;
  is_local: boolean;
  primary_color: string | null;
  track: Track | null;
  // video_thumbnail: { url: null } | null;
}

export interface PlaylistTrack extends PlaylistTrackDto {
  track: Track;
}
