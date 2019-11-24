export interface Pagination {
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
}

export interface Paginated<T> extends Pagination {
  items: T[];
}
