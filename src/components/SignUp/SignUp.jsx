import React from 'react'
import Button from '../UI/Button/Button';
import classes from './SignUp.module.css';

const SignUp = ({signBtnHandler,loginBtnHandler,active}) => {

  return (
    <div className={classes.Container}>
      <Button clicked={signBtnHandler} type='red'>Sign Up</Button>
      <Button clicked={loginBtnHandler} type='grey'>Log In</Button>
    </div>
  )
}

export default SignUp;