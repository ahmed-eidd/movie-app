import * as actionTypes from '../actions/actionTypes';






const initialState = {
  guestId: ''
}

const guestSessionReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.GENRE_FETCH_RES:
      return {
        ...state,
        guestId: action.guestSessionId
      }
    default:
      return state
  }
}

export default guestSessionReducer;