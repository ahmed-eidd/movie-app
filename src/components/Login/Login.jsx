import React from 'react'
import Button from '../UI/Button/Button';
import classes from './Login.module.scss';

const SignUp = ({signBtnHandler,loginBtnHandler,active}) => {

  return (
    <div className={classes.Container}>
      <Button clicked={signBtnHandler} variantColor='red'>Sign Up</Button>
      <Button clicked={loginBtnHandler} variantColor='grey'>Log In</Button>
    </div>
  )
}

export default SignUp;