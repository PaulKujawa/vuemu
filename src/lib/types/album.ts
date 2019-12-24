import { ArtistSimplified, ExternalUrl } from "lib/types";
import { Image } from "lib/types/image";

export interface AlbumSimplified {
  album_group?: "album" | "single" | "compilation" | "appears_on";
  album_type: "album" | "single" | "compilation";
  artists: ArtistSimplified[];
  available_markets: string[];
  external_urls: ExternalUrl;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: "year" | "month" | "day";
  restrictions: object;
  type: "album";
  uri: string;
}
