import * as actionTypes from './actionTypes';
import axios from 'axios';

export const topChartStart = () => {
  return {
    type: actionTypes.TOP_CHART_FETCH_START
  }
};
export const topChartRes = (movies) => {
  return {
    type: actionTypes.TOP_CHART_RES,
    topChart: movies,
  };
};
export const topChartErr = () => {
  return {
    type: actionTypes.TOP_CHART_ERR,
  };
};

const API_KEY = process.env.REACT_APP_API_KEY;

export const topChart = () => {
  return (dispatch) => {
    dispatch(topChartStart())
    
    const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
    
    axios
      .get(
        URL
      )
      .then((res) => {
        dispatch(topChartRes(res.data.results));
      })
      .catch((err) => {
        dispatch(topChartErr());
      });
  };
};