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
    guestId: guestSessionId,
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
        console.log(res.data.guest_session_id);
      })
      .catch((err) => {
        dispatch(guestSessionErr());
      });
  };
};

export const guestSessionLogOut = () => {
  return {
    type: actionTypes.GUEST_SESSION_LOG_OUT,
  };
};

export const guestSessionDelete = (id) => {
  return (dispatch) => {
    const URL = `https://api.themoviedb.org/3/authentication/session?api_key=${API_KEY}`;

    axios
      .delete(URL, {
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        data: JSON.stringify({
          session_id: id,
        }),
      })
      .then((res) => {
        dispatch(guestSessionLogOut());
        console.log('it worked');
      })
      .catch((err) => {
        console.log(err, id);
      });
  };
};
