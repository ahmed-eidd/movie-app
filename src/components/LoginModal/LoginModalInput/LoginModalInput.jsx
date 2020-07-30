import React from 'react';
import Classes from './LoginModalInput.module.css';

const LoginModalInput = () => {
  return (
     <React.Fragment>
      <h3 className={classes.ModalTitle}>Log in to Movie Box</h3>
     
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
    </React.Fragment>>
  )
}

export default LoginModalInput;
