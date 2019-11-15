import { ExternalUrl } from "modules/shared/models/external-url";
import { Followers } from "modules/playlist/models/followers";
import { Image } from "modules/shared/models/image";

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
