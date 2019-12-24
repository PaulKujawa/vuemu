import { ExternalUrl } from "lib/types";

export interface ArtistSimplified {
  external_urls: ExternalUrl;
  href: string;
  id: string;
  name: string;
  type: "artist";
  uri: string;
}
