import * as actionTypes from '../actions/actionTypes';

const initialState = {
  wishListMovies: []
}

const wishListMoviesReducer = (state = initialState, action) => {
   switch (action.type) {
    case actionTypes.GET_WISHLIST_MOVIES:
      if (!state.wishListMovies.some((el) => el.id === action.wishListMovie.id)) {
        return {
          wishListMovies: [...state.wishListMovies, action.wishListMovie],
        };
      } 
      else if (state.wishListMovies.some((el) => el.id === action.wishListMovie.id)) {
        return {
          wishListMovies: state.wishListMovies.filter(movie => movie.id !== action.wishListMovie.id)
        }
        
      }
      return state;
    default:
      return state;
  }
}

export default wishListMoviesReducer;