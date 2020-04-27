import { ExternalUrl } from "lib/types";

export interface ArtistSimplified {
  externalUrls: ExternalUrl;
  href: string;
  id: string;
  name: string;
  type: "artist";
  uri: string;
}
