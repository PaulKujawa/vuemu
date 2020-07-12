import { ExternalUrl, Image, Followers } from ".";

/* 
  commented out fields require additional Auth Scopes
    email: user-read-email
    country & product: user-read-private
*/
export interface UserPrivate {
  // country: string;
  displayName: string;
  // email: string;
  externalUrls: ExternalUrl;
  followers: Followers;
  href: string;
  id: string;
  images: Image[];
  // product: string;
  type: "user";
  uri: string;
}

export interface UserPublic {
  displayName: string | null;
  externalUrls: ExternalUrl;
  followers: Followers;
  href: string;
  id: string;
  images: Image[];
  type: "user";
  uri: string;
}
