import * as actionTypes from './actionTypes';


export const getFavMovies = (movie) => {
  return {
    type: actionTypes.GET_FAV_MOVIES,
    favMovie: movie
  }
}
