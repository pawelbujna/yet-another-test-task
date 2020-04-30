import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ currentPage, pagesAmount, changePage }) => {
  const pages = Array.from(Array(pagesAmount), (x, index) => index + 1)

  return (
    <nav>
      <ul>
        {pages.map(number => (
          <li key={number}
            className={(currentPage === number ? 'active' : '')}>
            <button onClick={() => changePage(number)}>
              {number}
            </button>
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

