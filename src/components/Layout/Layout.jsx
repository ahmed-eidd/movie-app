import React from 'react';
import classes from './Layout.module.css';
import Logo from '../UI/Logo/Logo';
import Nav from '../Nav/Nav';

const Layout = () => {
  return <div className={classes.Layout}>
    <Logo/>
    <Nav/>
  </div>;
};

export default Layout;
