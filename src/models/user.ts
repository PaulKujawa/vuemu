import { ExternalUrl } from "models/externalUrl";
import { Followers } from "models/followers";
import { Image } from "models/image";

export interface User {
  display_name: string | null;
  external_urls: ExternalUrl;
  followers: Followers;
  href: string;
  id: string;
  images: Image[];
  type: "user";
  uri: string;
}
