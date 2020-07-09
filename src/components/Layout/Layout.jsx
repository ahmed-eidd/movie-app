import React from 'react';
import classes from './Layout.module.css';
import Logo from '../UI/Logo/Logo';

const Layout = () => {
  return <div className={classes.Layout}>
    <Logo/>
  </div>;
};

export default Layout;
