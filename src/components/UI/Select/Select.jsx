import React from 'react';
import ReactSelect from 'react-select';
import './Select.scss';

const Select = ({
  value,
  placeholder,
  options,
  style,
  className,
  onChange,
}) => {
  return (
    <ReactSelect
      onChange={(newValue) => onChange(newValue)}
      value={value}
      className={className}
      style={style}
      classNamePrefix='custom-select'
      options={options}
      placeholder={placeholder}
      menuPortalTarget={document.body}
    >
      {placeholder}
    </ReactSelect>
  );
};

export default Select;
