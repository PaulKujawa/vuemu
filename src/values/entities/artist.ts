import { ExternalUrl } from ".";

export interface ArtistSimplified {
  externalUrls: ExternalUrl;
  href: string;
  id: string;
  name: string;
  type: "artist";
  uri: string;
}
