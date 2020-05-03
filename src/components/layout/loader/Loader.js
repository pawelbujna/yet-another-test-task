import React from 'react';
import PropTypes from 'prop-types';
import './Loader.css';

const Loader = ({ isLoading = true, children }) => {
  return (
    <div>
      {isLoading ?
        <div>
          <div className="loader"> <svg className="circular"
            viewBox="25 25 50 50">
            <circle className="path"
              cx="50"
              cy="50"
              r="20"
              fill="none"
              strokeWidth="2"
              strokeMiterlimit="10" />
          </svg>
          </div>
        </div> :
        <div>{children}</div>
      }
    </div>
  );
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired
};

export default Loader;
