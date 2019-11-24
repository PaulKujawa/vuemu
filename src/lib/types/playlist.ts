import { ExternalUrl } from "lib/types/external-url";
import { Image } from "lib/types/image";
import { User } from "lib/types/user";

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
