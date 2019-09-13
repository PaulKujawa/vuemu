import { Image } from "models/image";
import { Paging } from "models/paging";

export type Category = {
  href: string;
  icons: Image[];
  id: string;
  name: string;
};

export type CategoryPaging = { categories: Paging<Category> };
