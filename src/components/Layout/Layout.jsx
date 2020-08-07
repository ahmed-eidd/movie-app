import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux'
import classes from './Layout.module.css';
import Logo from '../UI/Logo/Logo';
import Nav from '../Nav/Nav';
import Search from '../Search/Search';
import SignUp from '../SignUp/SignUp';
import LoginModal from '../LoginModal/LoginModal';
import LogOut from '../LogOut/LogOut';
import * as actions from '../../store/actions/index';

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  // const [login,setLogin] = useState(false);
  // const [open, setOpen] = useState(false);
  const [loginTab, setLoginsTab] = useState('Sign Up');

  const login = useSelector((state) => state.auth.loginStatus)
  const open = useSelector((state) => state.auth.loginModal)

  let main = <main className={classes.Main}>{children}</main>;

  const handlingLoginBtn = () => {
    // setOpen(true);
    dispatch(actions.setLoginModal())
    setLoginsTab('Log In');
  };
  const handlingSignBtn = () => {
    // setOpen(true);
    dispatch(actions.setLoginModal())
    setLoginsTab('Sign Up');
  };
  const handlingModal = () => {
    // setOpen(!open);
    dispatch(actions.setLoginModal())
  };
  return (
    <div className={classes.Layout}>
     
      <LoginModal
        modalHandler={handlingModal}
        showModal={open}
        ModalTabHandler={setLoginsTab}
        loginTab={loginTab}
        guestModeHandler={() => dispatch(actions.guestSessionFetch())}
      />
      <Logo />
      <Nav />
      <Search /> 
      {
        !login ? ( <SignUp
        loginBtnHandler={handlingLoginBtn}
        signBtnHandler={handlingSignBtn}
      />) : <LogOut/>
      }
     
      {main}
    </div>
  );
};

export default Layout;
