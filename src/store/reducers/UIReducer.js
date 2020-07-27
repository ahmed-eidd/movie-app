import * as actionTypes from '../actions/actionTypes';


const initialState = {
  loading: false,
  error: false
}

const UIReducer = (state = initialState, action) =>{ 
  switch(action.type) {
    case actionTypes.MOVIE_FETCH_START:
      return {
        ...state,
        loading: true
      }
    case actionTypes.MOVIE_FETCH_RES:
      return {
        ...state,
        loading:false
      }
    case actionTypes.MOVIE_FETCH_ERR:
      return {
        ...state,
        loading:false,
        error:true
      }
     case actionTypes.GENRE_FETCH_START:
      return {
        ...state,
        loading: true
      }
    case actionTypes.GENRE_FETCH_RES:
      return {
        ...state,
        loading:false
      }
    case actionTypes.GENRE_FETCH_ERROR:
      return {
        ...state,
        loading:false,
        error:true
      }

      case actionTypes.CATEGORIES_FECTH_START:
      return {
        ...state,
        loading: true
      }
    case actionTypes.CATEGORIES_RES:
      return {
        ...state,
        loading:false
      }
    case actionTypes.CATEGORIES_ERR:
      return {
        ...state,
        loading:false,
        error:true
      }
    default:
      return state
  }
}

export default UIReducer;