import React from 'react';
import classes from './LoginModalBtn.module.css';

const LoginModalTabs = ({clicked,children}) => {
  return (
     
        <button className={[classes.ModalTabsButton, classes.active].join(' ')}
         onClick={clicked}
        >
        {children}
        </button>
    
  )
}

export default LoginModalTabs
