import { Context, Track } from "lib/types";

export interface CurrentlyPlaying {
  context: Context;
  currently_playing_type: "track" | "episode" | "ad" | "unknown";
  is_playing: boolean;
  item: Track;
  progress_ms: number;
  timestamp: number;
}
