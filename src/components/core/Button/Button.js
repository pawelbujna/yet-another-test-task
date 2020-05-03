import React from 'react';
import './Button.css';

const Button = ({ label, modifier = 'primary', click, props }) => (
  <button
    className={`button-${modifier}`}
    onClick={click}
    {...props}>{label}</button>
);

export default Button
