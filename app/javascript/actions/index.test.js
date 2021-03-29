import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import * as actions from "./index";
import * as types from "../types";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockResults = {
  data: [
    {
      id: 1,
      title: "Title 1",
    },
    {
      id: 2,
      title: "Title 2",
    },
  ],
};

describe("actions", () => {
  it("shoud create and action to set query", () => {
    const query = "This is some text";
    const expectedAction = {
      type: types.SET_QUERY,
      payload: query,
    };
    expect(actions.setQuery(query)).toEqual(expectedAction);
  });

  it("shoud create and action to set engines", () => {
    const engines = "google";
    const expectedAction = {
      type: types.SET_ENGINES,
      payload: engines,
    };
    expect(actions.setEngines(engines)).toEqual(expectedAction);
  });

  it("creates GET_RESULTS when get has been done", () => {
    fetch.once(JSON.stringify(mockResults));
    const expectedActions = [
      { type: types.SET_RESULTS, payload: undefined },
      { type: types.SET_RESULTS, payload: mockResults.data },
    ];

    const store = mockStore({ results: [] });
    return store.dispatch(actions.getResults("?q=text")).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
