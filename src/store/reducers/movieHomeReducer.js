import * as actionTypes from '../actions/actionTypes';

const intialState = {
  movies: [],
  nowPlaying: [],
  genres: [],
  error: false,
  loading: false,
};

const movieHomereducer = (state = intialState, action) => {
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
        genres: action.genres,
        loading: false,
      };
    case actionTypes.GENRE_FETCH_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case actionTypes.NOW_PLAYING_FECTH_START:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.NOW_PLAYING_RES:
      return {
        ...state,
        nowPlaying: action.nowPlaying,
        loading: false,
      };
    case actionTypes.NOW_PLAYING_ERR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default movieHomereducer;
