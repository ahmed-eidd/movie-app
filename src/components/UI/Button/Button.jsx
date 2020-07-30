import React from 'react';
import classes from './Button.module.css';

const Button = ({type,clicked,children}) => {
  return <button className={[classes.Button,classes[type]].join(' ')} onClick={clicked}>{children}</button>;
};

export default Button;
