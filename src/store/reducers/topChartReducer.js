import * as actionTypes from '../actions/actionTypes';
import { topChartErr } from '../actions/topChart';

const initialState = {
  topChart: []
}


const topChartReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.TOP_CHART_RES:
      return {
        ...state,
        topChart: action.topChart
      }
    default:
      return state;
  }
}

export default topChartReducer;