import { Pagination } from "lib/types";

export function getNextBatchOffset(pagination: Pagination | null): number {
  if (!pagination) {
    return 0;
  }

  return pagination.offset + pagination.limit;
}

export function hasNextBatch(pagination: Pagination | null): boolean {
  return !pagination || !!pagination.next;
}
