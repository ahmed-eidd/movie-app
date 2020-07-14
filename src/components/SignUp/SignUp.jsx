import React from 'react'
import Button from '../UI/Button/Button';
import classes from './SignUp.module.css';

const SignUp = () => {
  return (
    <div className={classes.Container}>
      <Button type='red'>Sign Up</Button>
      <Button type='grey'>Log In</Button>
    </div>
  )
}

export default SignUp;