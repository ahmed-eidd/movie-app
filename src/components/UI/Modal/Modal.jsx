import React from 'react';
import classes from './Modal.module.scss';
import Backdrop from '../Backdrop/Backdrop';

const Modal = ({ children, show, backdropHandler, clicked }) => {
  return (
    <React.Fragment>
      <Backdrop show={show} clicked={backdropHandler} />
      <div
        className={classes.ModalContainer}
        style={{
          transform: show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: show ? '1' : '0',
        }}
      >
        <i className='fas fa-times' onClick={clicked}></i>
        {children}
      </div>
    </React.Fragment>
  );
};

export default Modal;
