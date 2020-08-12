import * as actionTypes from './actionTypes';
import axios from 'axios';

export const getDetailsFetchStart = () => {
  return {
    type: actionTypes.GET_DETAILS_FETCH_START,
  };
};

export const getDetailsRes = (movie) => {
  return {
    type: actionTypes.GET_DETAILS_RES,
    movieDetails: movie,
  };
};

export const getDetailsErr = () => {
  return {
    type: actionTypes.GET_DETAILS_ERR,
  };
};

const API_KEY = process.env.REACT_APP_API_KEY;

export const getDetailsFetch = (id) => {
  return (dispatch) => {
    dispatch(getDetailsFetchStart());
    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
    axios
      .get(URL)
      .then((res) => {
        console.log(res);
        dispatch(getDetailsRes(res.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(getDetailsErr());
      });
  };
};
