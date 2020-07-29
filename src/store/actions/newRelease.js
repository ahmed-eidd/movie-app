import * as actionTypes from './actionTypes';
import axios from 'axios';


export const newReleaseStart = () => {
  return {
    type: actionTypes.NEW_RELEASE_FETCH_START
  }
}

export const newReleaseRes = (movies) => {
  return {
    type:actionTypes.NEW_RELEASE_RES,
    newRelease: movies
  }
}

export const newReleaseErr = () => {
  return {
    type: actionTypes.NEW_RELEASE_ERR
  }
}

const API_KEY = process.env.REACT_APP_API_KEY;

export const newReleaseFetch = () => {
  return (dispatch) => {
    dispatch(newReleaseStart()) 
    const URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`

    axios.get(URL).then((res) => {
      dispatch(newReleaseRes(res.data.results))
    }).catch((err) => {
      dispatch(newReleaseErr())
    })
  }
}