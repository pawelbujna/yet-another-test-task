import React from 'react';
import PropTypes from 'prop-types';

import Button from './../../core/Button/Button'

import './Pagination.css';

const Pagination = ({ currentPage, pagesAmount, changePage }) => {
  const pages = Array.from(Array(pagesAmount), (x, index) => index + 1)

  return (
    <nav>
      <ul>
        {pages.map(number => (
          <li key={number}
            className={(currentPage === number ? 'active' : '')}>

            <Button
              label={number}
              modifier="primary"
              click={() => changePage(number)} />
          </li>
        ))}

      </ul>
    </nav>
  )
};


Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  pagesAmount: PropTypes.number.isRequired,
  changePage: PropTypes.func.isRequired
};

export default Pagination
