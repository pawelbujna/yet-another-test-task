import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

const Input = ({ type = 'text', maxLength = 50, required = false, validationMsg, isValid, name, label, ...props }) => (
  <div className="input-wrapper">
    <label htmlFor={name}>
      {label}
    </label>

    <input
      type={type}
      name={name}
      id={name}
      maxLength={maxLength}
      required={required}
      {...props}
    />

    {isValid ? (<div className="validation-msg"> {validationMsg} </div>) : ''}

  </div>
);

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isValid: PropTypes.bool,
  maxLength: PropTypes.number,
  required: PropTypes.bool,
  validationMsg: PropTypes.string
};

export default Input
