import { Context, Track } from "lib/types";

export interface CurrentlyPlaying {
  context: Context;
  currentlyPlayingType: "track" | "episode" | "ad" | "unknown";
  isPlaying: boolean;
  item: Track;
  progressMs: number;
  timestamp: number;
}
