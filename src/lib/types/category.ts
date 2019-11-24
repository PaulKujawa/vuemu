import { Image } from "lib/types/image";

export interface Category {
  href: string;
  icons: Image[];
  id: string;
  name: string;
}
