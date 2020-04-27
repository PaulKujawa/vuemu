import { ArtistSimplified, ExternalUrl } from "lib/types";
import { Image } from "lib/types/image";

export interface AlbumSimplified {
  albumGroup?: "album" | "single" | "compilation" | "appears_on";
  albumType: "album" | "single" | "compilation";
  artists: ArtistSimplified[];
  availableMarkets: string[];
  externalUrls: ExternalUrl;
  href: string;
  id: string;
  images: Image[];
  name: string;
  releaseDate: string;
  releaseDatePrecision: "year" | "month" | "day";
  restrictions: object;
  totalTracks: number;
  type: "album";
  uri: string;
}
