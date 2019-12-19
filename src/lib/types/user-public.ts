import { ExternalUrl, Followers, Image } from "lib/types";

export interface UserPublic {
  display_name: string | null;
  external_urls: ExternalUrl;
  followers: Followers;
  href: string;
  id: string;
  images: Image[];
  type: "user";
  uri: string;
}
