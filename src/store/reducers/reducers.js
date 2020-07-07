import * as actionTypes from '../actions/actionTypes'

const intialState = {
  movies: [],
  error: false
}

const reducer = (state= intialState ,action) => {
  switch(action.type) {
    case actionTypes.MOVIE_FETCH_RES:
      return {
        ...state,
        movies: action.movies,
        error: false
      }
    case actionTypes.MOVIE_FETCH_ERR: 
      return {
        ...state,
        error: true
      }
    default:
      return state
  }

}

export default reducer; 