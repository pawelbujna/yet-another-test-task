import usersApi from './../../api/usersApi';
import { IS_LOADING, IS_NOT_LOADING } from './loadingActions'
import { SET_PAGINATION } from './paginationActions';

export const GET_USERS = 'GET_USERS';

export const getUsers = (pageNumber, itemsPerPage) => {
  return async dispatch => {
    dispatch({
      type: IS_LOADING
    })

    const result = await usersApi.get(pageNumber, itemsPerPage);

    dispatch({
      type: GET_USERS,
      payload: result.data
    })

    dispatch({
      type: SET_PAGINATION,
      payload: result.pagination
    })

    dispatch({
      type: IS_NOT_LOADING
    })
  }
};
