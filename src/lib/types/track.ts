import {
  AlbumSimplified,
  ArtistSimplified,
  ExternalUrl,
  ExternalId
} from "lib/types";

export interface TrackFull {
  album: AlbumSimplified;
  artists: ArtistSimplified[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalId;
  external_urls: ExternalUrl;
  href: string;
  id: string;
  is_playable: boolean;
  linked_from: object;
  restrictions: object;
  name: string;
  popularity: number; // 0 .. 100
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
  is_local: boolean;
}
