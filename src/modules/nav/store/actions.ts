import { AC } from "modules/shared/utils/action-creator";

export const INITIAL_LOAD_TYPE = "[NAV] INITIAL LOAD TYPE";
export const initialLoad = () => AC(INITIAL_LOAD_TYPE, undefined);
export type InitialLoadAction = ReturnType<typeof initialLoad>;

export type NavActionTypes = InitialLoadAction;
