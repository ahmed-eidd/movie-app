import * as actionTypes from '../actions/actionTypes';

const initialState = {
  findMeMovie: [],
};

const findMeMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FIND_ME_MOVIE_RES:
      return {
        ...state,
        findMeMovie: action.payload,
      };
    default:
      return state;
  }
};

export default findMeMovieReducer;
