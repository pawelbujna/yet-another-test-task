import React from 'react';
import PropTypes from 'prop-types';
// import './Input.css';

const Checkbox = ({ maxLength = 50, required = false, name, label, ...props }) => (
  <div className="checkbox-wrapper">
    <label htmlFor={name}>{
      label}
    </label>

    <input
      type="checkbox"
      name={name}
      id={name}
      maxLength={maxLength}
      required={required}
      {...props}
    />
  </div>
);

Checkbox.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  maxLength: PropTypes.number.isRequired,
  required: PropTypes.bool
};


export default Checkbox

