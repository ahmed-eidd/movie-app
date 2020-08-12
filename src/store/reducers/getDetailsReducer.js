import * as actionTypes from '../actions/actionTypes';



const initialState = {
  movieDetails: null
}

const getDetailsReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.GET_DETAILS_RES:
      return {
        movieDetails: action.movieDetails
      }
    default:
      return state
  }
}

export default getDetailsReducer;