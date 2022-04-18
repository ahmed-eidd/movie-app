import React from 'react';

const Form = ({ children, className, onSubmit }) => {

  return (
    <form
      className={className}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(e);
      }}
    >
      {children}
    </form>
  );
};

export default Form;
