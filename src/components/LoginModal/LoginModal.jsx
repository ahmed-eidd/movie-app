import React,{useState} from 'react';
import LoginModalBtn from './LoginModalBtn/LoginModalBtn';
import Button from '../UI/Button/Button';
import classes from './LoginModal.module.css';
import Modal from '../UI/Modal/Modal';

const LoginModal = ({clickHandler,modalHandler,showModal}) => {
  const [open, setOpen] = useState('login');
  const Login = (
    <React.Fragment>
      <h3 className={classes.ModalTitle}>Log in to Movie Box</h3>
      <div className={classes.ModalTabs}>
        <LoginModalBtn clicked={clickHandler}>Login In</LoginModalBtn>
        <LoginModalBtn clicked={clickHandler}>Sign UP</LoginModalBtn>
      </div>
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

  const SignUp = (
    <React.Fragment>
      <h3 className={classes.ModalTitle}>Join Movie Box</h3>{' '}
      <div className={classes.ModalTabs}>
        <LoginModalBtn clicked={clickHandler}>Login In</LoginModalBtn>
        <LoginModalBtn clicked={clickHandler}>Sign UP</LoginModalBtn>
      </div>
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
  return <Modal show={showModal} backdropHandler={modalHandler}>{open === 'login' ? Login : SignUp}</Modal>;
}

export default LoginModal;
