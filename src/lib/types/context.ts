import { ExternalUrl } from "lib/types";

export interface Context {
  external_urls: ExternalUrl;
  href: string;
  type: "playlist";
  uri: string;
}
