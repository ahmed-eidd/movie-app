import React from 'react';
import classes from './Button.module.scss';
import { Link } from 'react-router-dom';

interface ButtonProps {
  variant?: 'colored' | 'filled';
  variantColor?: 'red' | 'grey';
  type?: string;
  clicked?: () => void;
  children: React.ReactNode;
  to?: string;
  as?: string;
  id?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'colored',
  variantColor = 'red',
  type = 'button',
  clicked,
  children,
  to,
  as = 'button',
  id,
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

  switch (variantColor) {
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
    id: id,
  };

  return (
    <>
      {as === 'button' && (
        <button
          className={[btnVariant, variant === 'colored' && btnType].join(' ')}
          disabled={disabled}
          id={id}
          onClick={clicked}
        >
          {children}
        </button>
      )}

      {/* {as === 'link' && (
        <Link {...sharedBtnProps} to={to}>
          {children}
        </Link>
      )} */}
    </>
  );
};

export default Button;
