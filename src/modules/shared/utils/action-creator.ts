/*
 * action creator utility for better TS support:
 *
 * an action creator written plainly as
 *   const getCategories = () => ({ type: GET_CATEGORIES })
 * gets the return type of
 *   {type: string}
 * and hence loses support for "Discriminated Unions"
 * to avoid the need of repititive explicit return types like
 *   const getCategories = (): {type: typeof GET_CATEGORIES} => ({type: GET_CATEGORIES});
 * this helper gets used
 */

interface Action<T, P> {
  type: T;
  payload: P;
}

export const AC = <T extends string, P>(type: T, payload: P): Action<T, P> => ({
  type,
  payload: payload
});
