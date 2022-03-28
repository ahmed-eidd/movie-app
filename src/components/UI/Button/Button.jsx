import React from 'react';
import classes from './Button.module.scss';
import { Link } from 'react-router-dom';

const Button = ({
  variant = 'colored',
  type = 'red',
  clicked,
  children,
  to,
  as = 'button',
  disabled,
}) => {
  let btnVariant = null;
  let btnType = null;

  switch (variant) {
    case 'colored':
      btnVariant = classes.Button;
      break;
    case 'filled':
      btnVariant = classes.Filled;
      break;
    default:
      break;
  }

  switch (type) {
    case 'grey':
      btnType = classes.grey;
      break;
    case 'red':
      btnType = classes.red;
      break;
    default:
      break;
  }

  const sharedBtnProps = {
    onClick: clicked,
    className: [btnVariant, variant === 'colored' && btnType].join(' '),
    disabled: disabled,
  };

  return (
    <>
      {as === 'button' && <button {...sharedBtnProps}>{children}</button>}

      {as === 'link' && (
        <Link {...sharedBtnProps} to={to}>
          {children}
        </Link>
      )}
    </>
  );
};

export default Button;
