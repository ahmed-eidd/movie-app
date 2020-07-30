import React, { useState } from 'react';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

const Modal = ({ children, show,backdropHandler }) => {
  return (
    <React.Fragment>
      <Backdrop show={show} clicked={backdropHandler} />
      <div className={classes.ModalContainer} style={{
          transform: show ? "translateY(0)" : "translateY(-100vh)",
          opacity: show ? "1" : "0"
        }}>{children}</div>
    </React.Fragment>
  );
};

export default Modal;
