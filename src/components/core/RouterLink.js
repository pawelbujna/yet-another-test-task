import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const RouterLink = ({ path, label }) => (
  <div>
    <Link
      to={path}>
      {label}
    </Link>
  </div>
);

RouterLink.propTypes = {
  path: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default RouterLink

