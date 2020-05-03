import React from 'react';
import PropTypes from 'prop-types';
import './Checkbox.css';

const Checkbox = ({ name, label, ...props }) => (
  <div className="checkbox-wrapper">
    <label htmlFor={name}>
      {label}
    </label>

    <input
      className="css-checkbox"
      type="checkbox"
      name={name}
      id={name}
      {...props}
    />
  </div>
);

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Checkbox
