const reducer = (state, action) => {
  switch (action.type) {
    case "SET_QUERY":
      return {
        ...state,
        query: action.payload,
      };
    case "SET_ENGINES":
      return {
        ...state,
        engines: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
