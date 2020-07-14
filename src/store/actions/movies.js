import * as actionTypes from './actionTypes';
import axios from 'axios';

export const movieFetchStart = () => {
  return {
    type: actionTypes.MOVIE_FETCH_START
  }
};
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
    dispatch(movieFetchStart)
    
    const URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;
    
    axios
      .get(
        // `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
        URL
      )
      .then((res) => {
        console.log(res.data);
        dispatch(movieFetchRes(res.data.results));
      })
      .catch((err) => {
        console.log(err);
        dispatch(movieFetchErr());
      });
  };
};

export const genreFetchStart = () => {
  return {
    type: actionTypes.GENRE_FETCH_START
  }
}

export const genreFetchRes = (genres) => {
  return {
    type: actionTypes.GENRE_FETCH_RES,
    genres: genres
  }
}

export const genreFetchError = () => {
  return {
    type: actionTypes.GENRE_FETCH_ERROR
  }
}

export const genreFetch = () => {
  return (dispatch) => {
    dispatch(genreFetchStart)
    const URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
    axios.get(URL).then((res) => {
      dispatch(genreFetchRes(res.data.genres))
      console.log(res.data.genres)

    }
    ).catch(() => {
      dispatch(genreFetchError)
    })
  }
}