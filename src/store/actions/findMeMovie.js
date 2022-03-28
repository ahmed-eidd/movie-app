import * as actionTypes from './actionTypes';
import axios from 'axios';

export const findMeMovieFetchStart = () => {
  return {
    type: actionTypes.FIND_ME_MOVIE_FETCH_START,
  };
};

export const findMeMovieRes = (results) => {
  return {
    type: actionTypes.FIND_ME_MOVIE_RES,
    payload: results,
  };
};

export const findMeMovieErr = (err) => {
  return {
    type: actionTypes.FIND_ME_MOVIE_ERROR,
    payload: err,
  };
};

const API_KEY = process.env.REACT_APP_API_KEY;

export const findMeMovieAction = (inputs) => {
  const { genre, language, year, rating, popular } = inputs;

  const URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=${language}&sort_by=release_date.asc&include_adult=false&include_video=false&page=1&release_date.gte=${year}&vote_count.gte=${popular}&vote_average.gte=${rating}&with_genres=${genre}&with_watch_monetization_types=flatrate`;

  return (dispatch) => {
    dispatch(findMeMovieFetchStart());
    axios
      .get(URL)
      .then((res) => {
        dispatch(findMeMovieRes(res.data.results));
      })
      .catch((err) => {
        dispatch(findMeMovieErr(err));
      });
  };
};
