import * as actionTypes from '../actions/actionTypes';


const initialState = {
  results: []
}

const searchReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SEARCH_RES:
      return {
        results: action.results
      }
    default:
      return state
  }
}

export default searchReducer;