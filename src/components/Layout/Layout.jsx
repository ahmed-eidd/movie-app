import React from 'react';
import classes from './Layout.module.css';
import Logo from '../UI/Logo/Logo';
import Nav from '../Nav/Nav';
import Search from '../Search/Search';
import SignUp from '../SignUp/SignUp';
import Spinner from '../UI/Spinner/Spinner';

const Layout = (props) => {
  let main = ( <main className={classes.Main}>
      {props.children}
    </main>)

  return <div className={classes.Layout}>
    <Logo/>
    <Nav/>
    <Search/>
    <SignUp/>
    {main}
  </div>;
};

export default Layout;
