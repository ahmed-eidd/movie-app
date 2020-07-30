import React from 'react'
import Button from '../UI/Button/Button';
import classes from './SignUp.module.css';

const SignUp = ({clicked}) => {
  return (
    <div className={classes.Container}>
      <Button clicked={clicked} type='red'>Sign Up</Button>
      <Button clicked={clicked} type='grey'>Log In</Button>
    </div>
  )
}

export default SignUp;