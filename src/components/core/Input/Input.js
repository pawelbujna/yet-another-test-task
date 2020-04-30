import React from 'react';
import PropTypes from 'prop-types';
// import './Input.css';

const Input = ({ type = 'text', maxLength = 50, required = false, name, label, ...props }) => (
  return (<div className="input-wrapper">
    <label htmlFor={name}>{
      label}
    </label>

    <input
      type={type}
      name={name}
      id={name}
      maxLength={maxLength}
      required={required}
      {...props}
    />
  </div>
);

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  maxLength: PropTypes.number.isRequired,
  required: PropTypes.bool
};


export default Input

