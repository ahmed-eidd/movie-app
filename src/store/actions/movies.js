import * as actionTypes from './actionTypes';
import axios from 'axios';



export const movieFetchStart = null;
export const movieFetchRes = (movies) => {
  return {
    type: actionTypes.MOVIE_FETCH_RES,
    movies: movies,
  };
};
export const movieFetchErr = () => {
  return {
    type: actionTypes.MOVIE_FETCH_ERR,
  };
};

const API_KEY = process.env.REACT_APP_API_KEY;


export const movieFetch = () => {
  
  return (dispatch) => {
    
    console.log(API_KEY)
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      )
      .then((res) => {
        console.log(res.data);
        dispatch(movieFetchRes(res.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(movieFetchErr());
      });
  };
};
