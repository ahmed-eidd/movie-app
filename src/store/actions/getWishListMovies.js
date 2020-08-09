import  * as actionTypes from './actionTypes';




export const getWishListMovies = (movie) => {
  return {
    type: actionTypes.GET_WISHLIST_MOVIES,
    wishListMovie: movie
  }
}