import {
  SET_SEARCH_TERM,
  SearchTermActionTypes
} from "store/searchTerm/actionTypes";

export interface SearchTermState {
  query: string;
}

const initialState: SearchTermState = {
  query: ""
};

export const searchTermReducer = (
  state = initialState,
  action: SearchTermActionTypes
): SearchTermState => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return { ...state, query: action.payload };
    default:
      return state;
  }
};
