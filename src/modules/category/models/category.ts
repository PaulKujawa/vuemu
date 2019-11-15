import { Image } from "modules/shared/models/image";

export interface Category {
  href: string;
  icons: Image[];
  id: string;
  name: string;
}
