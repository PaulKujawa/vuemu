import { FetchParameters } from "utils/http";

export interface Paging<T> {
  items: T[];
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
}

export function isLastBatch({ offset, limit, total }: Paging<any>): boolean {
  return offset + limit >= total;
}

export function getNextOffset(
  fetchParams: FetchParameters,
  { limit }: Paging<any>
): string {
  const current = Number(fetchParams.query && fetchParams.query.offset) || 0;

  return (current + limit).toString();
}
