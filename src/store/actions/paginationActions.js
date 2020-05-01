export const SET_PAGINATION = 'SET_PAGINATION';

export const setPagination = (paginationOptions) => {
  return {
    type: SET_PAGINATION,
    payload: paginationOptions
  }
};

