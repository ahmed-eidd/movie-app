import React, { useState } from 'react';
import LoginModalBtns from './LoginModalBtns/LoginModalBtns';
import Button from '../UI/Button/Button';
import classes from './LoginModal.module.css';
import Modal from '../UI/Modal/Modal';

const LoginModal = ({
 
  modalHandler, // a passed func to show and close modal for modal and backdrop
  showModal, // a boolean to show or close modal from modal and backdrop
  ModalTabHandler, // a passed func to show login or sign up
  loginTab, // a value to show login or sign up
}) => {


  // Login Mini Component

  const Login = (
    <React.Fragment>
      <h3 className={classes.ModalTitle}>Log in to Movie Box</h3>
      <LoginModalBtns clicked={ModalTabHandler} active={loginTab} />
      <form className={classes.ModalForm}>
        <div className={classes.ModalFormInputs}>
          {/* <label htmlFor="usename">Username</label> */}
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div className={classes.ModalFormInputs}>
          {/* <label htmlFor="password">Password</label> */}
          <input type="password" name="password" placeholder="Password" />
        </div>
      </form>
      <Button type="red">Log In</Button>
      <p className={classes.span}>OR</p>
      <Button type="grey">Guest Mode</Button>
    </React.Fragment>
  );


    // sign up Mini component

  const SignUp = (
    <React.Fragment>
      <h3 className={classes.ModalTitle}>Join Movie Box</h3>{' '}
      <LoginModalBtns clicked={ModalTabHandler} active={loginTab} />}
      <form className={classes.ModalForm}>
        <div className={classes.ModalFormInputs}>
          {/* <label htmlFor="usename">Username</label> */}
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div className={classes.ModalFormInputs}>
          {/* <label htmlFor="password">Password</label> */}
          <input type="email" name="email" placeholder="E-mail" />
        </div>
        <div className={classes.ModalFormInputs}>
          {/* <label htmlFor="password">Password</label> */}
          <input type="password" name="password" placeholder="Password" />
        </div>
      </form>
      <Button type="red">Sign Up</Button>
      <p className={classes.span}>OR</p>
      <Button type="grey">Guest Mode</Button>
    </React.Fragment>
  );
  return (
    <Modal
      show={showModal}
      backdropHandler={modalHandler}
      clicked={modalHandler}
    >
      {loginTab === 'Sign Up' ? SignUp : Login}
    </Modal>
  );
};

export default LoginModal;
