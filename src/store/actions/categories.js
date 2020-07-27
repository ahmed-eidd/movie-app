import * as actionTypes from './actionTypes';
import axios from 'axios';

export const categoriesFecthStart = () => {
  return {
    type: actionTypes.CATEGORIES_FECTH_START
  }
}

export const categoriesRes = (categories ) => {
  return {
    type: actionTypes.CATEGORIES_RES,
    categories: categories 
  }
}

export const categoriesErr = () => {
  return {
    type: actionTypes.CATEGORIES_ERR
  }
}

const API_KEY = process.env.REACT_APP_API_KEY;

export const categoriesFecth = (genre) => {
  return (dispatch) => {
    dispatch(categoriesFecthStart());
    const URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre}`
    axios.get(URL).then((res) => {
      dispatch(categoriesRes(res.data.results));
      console.log(res.data.results)
    }).catch((error) => {
      dispatch(categoriesErr())
      console.log(error)
    }) 
  }
} 