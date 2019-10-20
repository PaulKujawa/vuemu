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

// export function isLastBatch({ offset, limit, total }: Paginated<any>): boolean {
//   return offset + limit >= total;
// }

// export function getNextOffset(
//   fetchParams: FetchParameters,
//   { limit }: Paginated<any>
// ): string {
//   const current = Number(fetchParams.query && fetchParams.query.offset) || 0;

//   return (current + limit).toString();
// }
