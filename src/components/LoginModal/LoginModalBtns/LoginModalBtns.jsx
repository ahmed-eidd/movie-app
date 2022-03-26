import React from 'react';
import classes from './LoginModalBtns.module.scss';
// import LoginModal from '../LoginModal';

const LoginModalTabs = ({ clicked, children, active }) => {
  // signActive and loginActive to show which tab is active
  const signActive =
    active === 'Sign Up'
      ? [classes.ModalTabsButton, classes.active].join(' ')
      : classes.ModalTabsButton;
  const loginActive =
    active === 'Log In'
      ? [classes.ModalTabsButton, classes.active].join(' ')
      : classes.ModalTabsButton;
  return (
    <div className={classes.ModalTabs}>
      <button className={signActive} onClick={() => clicked('Sign Up')}>
        Sign Up
      </button>
      <button className={loginActive} onClick={() => clicked('Log In')}>
        Log In
      </button>
    </div>
  );
};

export default LoginModalTabs;
