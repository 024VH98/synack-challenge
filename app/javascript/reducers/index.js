import { SET_ENGINES, SET_QUERY, SET_RESULTS } from "../types";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_QUERY:
      return {
        ...state,
        query: action.payload,
      };
    case SET_ENGINES:
      return {
        ...state,
        engines: action.payload,
      };
    case SET_RESULTS:
      return {
        ...state,
        results: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
