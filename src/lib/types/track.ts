import {
  AlbumSimplified,
  ArtistSimplified,
  ExternalUrl,
  ExternalId
} from "lib/types";

export interface Track {
  album: AlbumSimplified;
  artists: ArtistSimplified[];
  availableMarkets: string[];
  discNumber: number;
  durationMs: number;
  explicit: boolean;
  externalIds: ExternalId;
  externalUrls: ExternalUrl;
  href: string;
  id: string;
  isLocal: boolean;
  isPlayable?: boolean;
  linkedFrom?: object;
  restrictions?: object;
  name: string;
  popularity: number; // 0 .. 100
  previewUrl: string;
  trackNumber: number;
  type: string;
  uri: string;
}
