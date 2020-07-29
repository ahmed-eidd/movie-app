import * as actionTypes from '../actions/actionTypes';


const initialState = {
  newRelease: []
}

const newReleaseReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.NEW_RELEASE_RES:
      return {
        ...state,
        newRelease: action.newRelease
      }
    default:
      return state;
  }
}


export default newReleaseReducer;