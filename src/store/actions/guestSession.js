import * as actionTypes from './actionTypes';
import axios from 'axios';

export const guestSessionFecthStart = () => {
  return {
    type: actionTypes.GUEST_SESSION_FETCH_START,
  };
};

export const guestSessionRes = (guestSessionId) => {
  return {
    type: actionTypes.GUEST_SESSION_RES,
    guestSessionId,
  };
};

export const guestSessionErr = () => {
  return {
    type: actionTypes.GUEST_SESSION_ERR,
  };
};

const API_KEY = process.env.REACT_APP_API_KEY;

export const guestSessionFetch = () => {
  return (dispatch) => {
    dispatch(guestSessionFecthStart());
    const URL = `https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${API_KEY}`;
    axios
      .get(URL)
      .then((res) => {
        dispatch(guestSessionRes(res.data.guest_session_id));
        console.log(res)
      })
      .catch((err) => {
        dispatch(guestSessionErr());
      });
  };
};
