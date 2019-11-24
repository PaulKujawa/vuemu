import { ExternalUrl } from "lib/types/external-url";
import { Followers } from "lib/types/followers";
import { Image } from "lib/types/image";

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
