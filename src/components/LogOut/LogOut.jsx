import React from 'react';
import Button from '../UI/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions/index';
import classes from './LogOut.module.scss';

const LogOut = () => {
  const dispatch = useDispatch();
  const guestSessionId = useSelector((state) => state.guestSession.guestId);
  return (
    <div className={classes.Container}>
      <p>
        Welcome <span>Guest</span>
      </p>
      <Button
        type="grey"
        clicked={() => dispatch(actions.guestSessionDelete(guestSessionId))}
      >
        Log Out
      </Button>
    </div>
  );
};

export default LogOut;
