import * as actionTypes from './actionTypes';
import axios from 'axios';

export const searchFetchStart = () => {
  return {
    type: actionTypes.SEARCH_FETCH_START,
  };
};

export const searchRes = (movies) => {
  return {
    type: actionTypes.SEARCH_RES,
    results: movies,
  };
};

export const searchErr = () => {
  return {
    type: actionTypes.SEARCH_ERR,
  };
};

const API_KEY = process.env.REACT_APP_API_KEY;

export const searchFetch = (query) => {
  return (dispatch) => {
    dispatch(searchFetchStart());
    const URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=falsee`;

    axios
      .get(URL)
      .then((res) => {
        console.log(res);
        dispatch(searchRes(res.data.results));
      })
      .catch((err) => {
        dispatch(searchErr());
      });
  };
};
