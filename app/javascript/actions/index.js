import { SET_ENGINES, SET_QUERY, SET_RESULTS } from "../types";

export const setQuery = (payload) => ({
  type: SET_QUERY,
  payload,
});

export const setEngines = (payload) => ({
  type: SET_ENGINES,
  payload,
});

export const getResults = (query) => async (dispatch) => {
  dispatch({
    type: SET_RESULTS,
    payload: undefined,
  });
  try {
    const response = await fetch(`/api/search${query}`);
    const data = await response.json();
    dispatch({
      type: SET_RESULTS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: SET_RESULTS,
      payload: {
        error: "Something wen't wrong",
      },
    });
  }
};
export default null;
