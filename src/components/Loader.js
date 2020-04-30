import React from 'react';

const Loader = ({ isLoading, children }) => {
  return (
    <div>
      {isLoading ?
        <div>isLoading</div> :
        <div>{children}</div>
      }
    </div>
  );
}

export default Loader;
