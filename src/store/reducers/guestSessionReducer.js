import * as actionTypes from '../actions/actionTypes';






const initialState = {
  guestId: ''
}

const guestSessionReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.GUEST_SESSION_RES:
      return {
        guestId: action.guestId
      }
   
    default:
      return state;
  }
}

export default guestSessionReducer;