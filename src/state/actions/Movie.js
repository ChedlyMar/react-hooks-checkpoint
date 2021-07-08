export const addMovie = (payload) => {
  return (dispatch) => {
    dispatch({
      type: "ADD_MOVIE",
      payload,
    });
  };
};

export const filterMovie = (payload) => {
  return (dispatch) => {
    dispatch({
      type: "FILTER_MOVIE",
      payload,
    });
  };
};
