import { call, put } from "@redux-saga/core/effects";
import { BROWSER_API } from "lib/http/browse-api";
import { getCategorySaga, CategoryActions } from "..";

const action = CategoryActions.getCategory("42");

describe("getCategorySaga", () => {
  it("should do a network call, dispatch the category, and reset the playlists", () => {
    const it = getCategorySaga(action);

    expect(it.next().value).toEqual(call(BROWSER_API.getCategory, "42"));

    const category = {} as any;
    expect(it.next(category).value).toEqual(
      put(CategoryActions.getCategorySuccess(category))
    );

    expect(it.next().value).toEqual(put(CategoryActions.resetPlaylists()));
  });

  it("should catch an error and dispatch it", () => {
    const it = getCategorySaga(action);

    expect(it.next().value).toEqual(call(BROWSER_API.getCategory, "42"));

    const error = {};
    expect(it.throw(error).value).toEqual(
      put(CategoryActions.getCategoryFailure(error))
    );
  });
});
