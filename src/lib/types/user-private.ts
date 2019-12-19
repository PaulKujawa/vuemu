import { ExternalUrl, Image, Followers } from "lib/types";

/* 
  commented out fields require additional Auth Scopes
    email: user-read-email
    country & product: user-read-private
*/
export interface UserPrivate {
  // country: string;
  display_name: string;
  // email: string;
  external_urls: ExternalUrl;
  followers: Followers;
  href: string;
  id: string;
  images: Image[];
  // product: string;
  type: "user";
  uri: string;
}
