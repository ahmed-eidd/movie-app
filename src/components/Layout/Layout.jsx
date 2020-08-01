import React, { useState } from 'react';
import classes from './Layout.module.css';
import Logo from '../UI/Logo/Logo';
import Nav from '../Nav/Nav';
import Search from '../Search/Search';
import SignUp from '../SignUp/SignUp';
import LoginModal from '../LoginModal/LoginModal';

const Layout = ({ children }) => {
  const [open, setOpen] = useState(true);
  const [loginTab, setLoginsTab] = useState('Sign Up');

  
  let main = <main className={classes.Main}>{children}</main>;

  const handlingLoginBtn = () => {
    setOpen(true);
    setLoginsTab('Log In');
  };
  const handlingSignBtn = () => {
    setOpen(true);
    setLoginsTab('Sign Up');
  };
  const handlingModal = () => {
    setOpen(!open);
  };
  return (
    <div className={classes.Layout}>
      <LoginModal
        modalHandler={handlingModal}
        showModal={open}
        ModalTabHandler={setLoginsTab}
        loginTab={loginTab}
  
      />
      <Logo />
      <Nav />
      <Search />
      <SignUp loginBtnHandler={handlingLoginBtn} signBtnHandler={handlingSignBtn} />
      {main}
    </div>
  );
};

export default Layout;
