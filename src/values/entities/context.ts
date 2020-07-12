import { ExternalUrl } from ".";

export interface Context {
  externalUrls: ExternalUrl;
  href: string;
  type: "playlist";
  uri: string;
}
