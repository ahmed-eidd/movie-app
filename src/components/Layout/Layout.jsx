import React, { useState } from 'react';
import classes from './Layout.module.css';
import Logo from '../UI/Logo/Logo';
import Nav from '../Nav/Nav';
import Search from '../Search/Search';
import SignUp from '../SignUp/SignUp';
import LoginModal from '../LoginModal/LoginModal';
import Backdrop from '../UI/Backdrop/Backdrop';

const Layout = (props) => {
  const [open,setOpen] = useState(true);
  let main = <main className={classes.Main}>{props.children}</main>;
  const handlingModal = () => {
    setOpen(!open)
  }
  return (
    <div className={classes.Layout}>
      <LoginModal modalHandler={handlingModal} showModal={open} />
      <Logo />
      <Nav />
      <Search />
      <SignUp clicked={handlingModal} />
      {main}
    </div>
  );
};

export default Layout;
