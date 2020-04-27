import { ExternalUrl } from "lib/types";

export interface Context {
  externalUrls: ExternalUrl;
  href: string;
  type: "playlist";
  uri: string;
}
