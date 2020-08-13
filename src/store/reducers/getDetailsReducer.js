import * as actionTypes from '../actions/actionTypes';



const initialState = {
  movieDetails: null,
  recommendations: []
}

const getDetailsReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.GET_DETAILS_RES:
      return {
        ...state,
        movieDetails: action.movieDetails
      }
    case actionTypes.GET_RECOMMENDATIONS_RES:
      return {
        ...state,
        recommendations: action.recommendations
      }
    default:
      return state
  }
}

export default getDetailsReducer;