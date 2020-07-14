import * as actionTypes from '../actions/actionTypes';

const intialState = {
  movies: [],
  error: false,
  loading: false,
  genres: [],
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.MOVIE_FETCH_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.MOVIE_FETCH_RES:
      return {
        ...state,
        movies: action.movies,
        error: false,
        loading: false,
      };
    case actionTypes.MOVIE_FETCH_ERR:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case actionTypes.GENRE_FETCH_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GENRE_FETCH_RES:
      return {
        ...state,
        gernes: action.genres,
        loading: false
      }
    case actionTypes.GENRE_FETCH_ERROR:
      return {
        ...state,
        error: true,
        loading: false
      }
    default:
      return state;
  }
};

export default reducer;
