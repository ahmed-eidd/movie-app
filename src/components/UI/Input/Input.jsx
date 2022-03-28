import React from 'react';
import classes from './Input.module.scss';

const Input = ({ onChange, className, error, ...props }) => {
  return (
    <div className={classes.InputContainer}>
      <input
        className={[classes.Input, className].join(' ')}
        {...props}
        onChange={onChange}
      />
      <p className={classes.InputErrorMessage}>{error}</p>
    </div>
  );
};

export default Input;
