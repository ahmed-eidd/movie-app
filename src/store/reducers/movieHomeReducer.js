import * as actionTypes from '../actions/actionTypes';

const intialState = {
  movies: [],
  nowPlaying: [],
  genres: [],
};

const movieHomereducer = (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.MOVIE_FETCH_RES:
      return {
        ...state,
        movies: action.movies,
      };
    case actionTypes.GENRE_FETCH_RES: 
      return {
        ...state,
        genres: action.genres
      }
    case actionTypes.NOW_PLAYING_RES:
      return {
        ...state,
        nowPlaying: action.nowPlaying,
      };
    default:
      return state;
  }
};

export default movieHomereducer;
