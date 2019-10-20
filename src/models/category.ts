import { Image } from "models/image";

export interface Category {
  href: string;
  icons: Image[];
  id: string;
  name: string;
}
