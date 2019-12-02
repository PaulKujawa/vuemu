import { getCategorySaga } from "modules/category/store/sagas";
import { getCategory } from "modules/category/store/actions";
import { call, put } from "@redux-saga/core/effects";
import { BROWSER_API } from "lib/http/browse-api";
import * as Actions from "modules/category/store/actions";

const action = getCategory("42");

describe("getCategorySaga", () => {
  it("should do a network call, dispatch the category, and reset the playlists", () => {
    const iterator = getCategorySaga(action);

    expect(iterator.next().value).toEqual(call(BROWSER_API.getCategory, "42"));

    const category = {} as any;
    expect(iterator.next(category).value).toEqual(
      put(Actions.getCategorySuccess(category))
    );

    expect(iterator.next().value).toEqual(put(Actions.resetPlaylists()));
  });

  it("should catch an error and dispatch it", () => {
    const iterator = getCategorySaga(action);

    expect(iterator.next().value).toEqual(call(BROWSER_API.getCategory, "42"));

    const error = {};
    expect(iterator.throw(error).value).toEqual(
      put(Actions.getCategoryFailure(error))
    );
  });
});
