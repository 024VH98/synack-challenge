export const setQuery = (payload) => ({
  type: "SET_QUERY",
  payload,
});

export const setEngines = (payload) => ({
  type: "SET_ENGINES",
  payload,
});

export const getResults = (query) => async (dispatch) => {
  dispatch({
    type: "GET_RESULTS",
    payload: undefined,
  });
  const response = await fetch(`/api/search${query}`);
  const data = await response.json();
  dispatch({
    type: "GET_RESULTS",
    payload: data.data,
  });
};
export default null;
