import React from 'react';
import classes from './Backdrop.module.scss';

const Backdrop = ({ children, show, clicked }) => {
  return show ? (
    <div className={classes.Backdrop} onClick={clicked}>
      {children}
    </div>
  ) : null;
};

export default Backdrop;
