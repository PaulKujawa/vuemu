import { Pagination } from "lib/types/paging";

export function nextBatchOffset(pagination: Pagination | null): number {
  if (!pagination) {
    return 0;
  }

  return pagination.offset + pagination.limit;
}

export function nextBatchExists(pagination: Pagination | null): boolean {
  return !pagination || !!pagination.next;
}
