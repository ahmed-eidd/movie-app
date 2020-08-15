import * as actionTypes from '../actions/actionTypes';

const initialState = {
  loading: false,
  error: false,
};

const UIReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MOVIE_FETCH_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.MOVIE_FETCH_RES:
      return {
        ...state,
        loading: false,
      };
    case actionTypes.MOVIE_FETCH_ERR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    // case actionTypes.GENRE_FETCH_START:
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    // case actionTypes.GENRE_FETCH_RES:
    //   return {
    //     ...state,
    //     loading: false,
    //   };
    case actionTypes.GENRE_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };

    case actionTypes.CATEGORIES_FECTH_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.CATEGORIES_RES:
      return {
        ...state,
        loading: false,
      };
    case actionTypes.CATEGORIES_ERR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case actionTypes.TOP_CHART_FETCH_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.TOP_CHART_RES:
      return {
        ...state,
        loading: false,
      };
    case actionTypes.TOP_CHART_ERR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case actionTypes.NEW_RELEASE_FETCH_START:
      return {
        ...state,
        loading: true
      }
    case actionTypes.NEW_RELEASE_RES:
      return {
        ...state,
        loading: false
      }
    case actionTypes.NOW_PLAYING_ERR:
      return {
        ...state,
        loading: false,
        error: true
      }
    case actionTypes.GET_DETAILS_FETCH_START:
      return {
        ...state,
        loading: true,
        error: false
      }
    case actionTypes.GET_DETAILS_RES:
      return {
        ...state,
        loading: false,
        error: false
      }
    case actionTypes.GET_DETAILS_ERR:
      return {
        ...state,
        loading: false,
        error: true
      }
    case actionTypes.SEARCH_FETCH_START:
      return {
        ...state,
        loading: true,
        error: false
      }
    case actionTypes.SEARCH_RES:
      return {
        ...state,
        loading: false,
        error: false
      }
    case actionTypes.SEARCH_ERR:
      return {
        ...state,
        loading: false,
        error: true
      }
    default:
      return state;
  }
};

export default UIReducer;
