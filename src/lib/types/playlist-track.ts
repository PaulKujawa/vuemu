import { UserPublic, TrackFull } from "lib/types";

export interface PlaylistTrack {
  added_at: Date;
  added_by: UserPublic;
  is_local: boolean;
  track: TrackFull;
}
