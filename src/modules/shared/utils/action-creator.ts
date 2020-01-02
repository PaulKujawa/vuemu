/*
 * action creator utility that accomplishes the same as:
 *
 * `const getFoo = () => ({ type: GET_FOO_TYPE }) as const`
 * `const getFooSuccess = (foo: Foo) => ({ type: GET_FOO_SUCCESS_TYPE, payload: foo }) as const`
 */

export interface Action<T, P> {
  readonly type: T;
  readonly payload: P;
}

export function AC<T extends string, P>(type: T, payload: P): Action<T, P>;
export function AC<T extends string>(type: T): Action<T, undefined>;
export function AC<T extends string, P>(
  type: T,
  payload?: P
): Action<T, P | undefined> {
  return { type, payload };
}
