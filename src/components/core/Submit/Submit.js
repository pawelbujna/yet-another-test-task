import React from 'react';
import PropTypes from 'prop-types';
import './Submit.css';

const Submit = ({ label }) => (
  <div className="submit-wrapper">

    <input
      type="submit"
      value={label}
    />

  </div>
);

Submit.propTypes = {
  label: PropTypes.string.isRequired
};

export default Submit
