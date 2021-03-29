import reducer from "./index";
import * as types from "../types";

describe("reducers", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      query: "",
      engines: "google",
      results: undefined,
    });
  });

  it("should handle SET_QUERY", () => {
    expect(
      reducer(
        {},
        {
          type: types.SET_QUERY,
          payload: "Some text",
        },
      ),
    ).toEqual({
      query: "Some text",
    });

    expect(
      reducer(
        {
          query: "Past text",
        },
        {
          type: types.SET_QUERY,
          payload: "New text",
        },
      ),
    ).toEqual({
      query: "New text",
    });
  });

  it("should handle SET_ENGINES", () => {
    expect(
      reducer(
        {},
        {
          type: types.SET_ENGINES,
          payload: "google",
        },
      ),
    ).toEqual({
      engines: "google",
    });

    expect(
      reducer(
        {
          engines: "bing",
        },
        {
          type: types.SET_ENGINES,
          payload: "google",
        },
      ),
    ).toEqual({
      engines: "google",
    });
  });

  it("should handle SET_RESULTS", () => {
    expect(
      reducer(
        {},
        {
          type: types.SET_RESULTS,
          payload: [
            {
              id: 1,
              title: "Some title 1",
            },
          ],
        },
      ),
    ).toEqual({
      results: [
        {
          id: 1,
          title: "Some title 1",
        },
      ],
    });

    expect(
      reducer(
        {
          results: [
            {
              id: 2,
              title: "Some title 2",
            },
          ],
        },
        {
          type: types.SET_RESULTS,
          payload: [
            {
              id: 1,
              title: "Some title 1",
            },
          ],
        },
      ),
    ).toEqual({
      results: [
        {
          id: 1,
          title: "Some title 1",
        },
      ],
    });
  });
});
