import * as actionTypes from '../actions/actionTypes';

const initialState = {
  favouritesMovies: [],
};



const favMoviesReducer = (state = initialState, action) => {
  // console.log('fav',action.favMovie)
  switch (action.type) {
    case actionTypes.GET_FAV_MOVIES:
      if (!state.favouritesMovies.some((el) => el.id === action.favMovie.id)) {
        // console.log(action.favMovie.id);
        return {
          favouritesMovies: [...state.favouritesMovies, action.favMovie],
        };
      } 
      else if (state.favouritesMovies.some((el) => el.id === action.favMovie.id)) {
        return {
          favouritesMovies: state.favouritesMovies.filter(movie => movie.id !== action.favMovie.id)
        }
        
      }
      return state;
    default:
      return state;
  }
};

export default favMoviesReducer;
