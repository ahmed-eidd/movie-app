import * as actionTypes from '../actions/actionTypes';



const initialState = {
  loginStatus: false,
  loginModal: false
}


const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.GUEST_SESSION_RES:
      return {
        ...state,
        loginStatus: true,
        loginModal: false
      }
    case actionTypes.GUEST_SESSION_ERR:
      return {
        ...state,
        loginStatus: false
      }
    case actionTypes.SET_LOGIN_MODAL:
      return {
        ...state,
        loginModal: !state.loginModal
      }
    case actionTypes.GUEST_SESSION_LOG_OUT:
      return {
        ...state,
        loginStatus: false
      }
    default:
      return state
  }
}

export default authReducer;