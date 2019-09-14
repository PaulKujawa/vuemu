import {
  SET_SEARCH_TERM,
  SearchTermActionTypes
} from "store/searchTerm/actionTypes";

export function setSearchTerm(payload: string): SearchTermActionTypes {
  return { type: SET_SEARCH_TERM, payload };
}
