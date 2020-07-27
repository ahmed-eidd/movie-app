import * as actionTypes from '../actions/actionTypes';






const initialState = {
  categoriesMovies: []
}

const categoriesReducer = (state = initialState,action) => {
  switch(action.type) {
    case actionTypes.CATEGORIES_RES:
      return {
        ...state,
        categoriesMovies: action.categories 
      }
    default:
      return state;

  }
}

export default categoriesReducer;