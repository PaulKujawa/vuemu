import { Image } from "models/image";
import { Paging } from "models/paging";

export interface Category {
  href: string;
  icons: Image[];
  id: string;
  name: string;
}

export interface CategoryPaging {
  categories: Paging<Category>;
}
