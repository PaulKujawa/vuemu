import { ExternalUrl, Image, User } from "lib/types";

export interface PlaylistSimplified {
  collaborative: boolean;
  external_urls: ExternalUrl;
  href: string;
  id: string;
  images: Image[];
  name: string;
  owner: User;
  public: boolean | null;
  snapshot_id: string;
  tracks: { href: string; total: number };
  type: "playlist";
  uri: string;
}

// TODO actual properties
export interface PlaylistFull extends PlaylistSimplified {}
