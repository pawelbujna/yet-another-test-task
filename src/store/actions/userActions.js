import usersApi from './../../api/usersApi';

export const GET_USERS = 'GET_USERS';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE';

export const GET_USER_BY_ID = 'GET_USER_BY_ID';
export const GET_USER_BY_ID_SUCCESS = 'GET_USER_BY_ID_SUCCESS';
export const GET_USER_BY_ID_FAILURE = 'GET_USERS_BY_ID_FAILURE';

export const SAVE_USER = 'SAVE_USER';
export const SAVE_USER_SUCCESS = 'SAVE_USER_SUCCESS';
export const SAVE_USER_FAILURE = 'SAVE_USER_FAILURE';

export const DELETE_USER = 'DELETE_USER';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_FAILURE = 'DELETE_USER_FAILURE';

export const getUsers = (pageNumber, itemsPerPage) => {
  return async dispatch => {
    dispatch({ type: GET_USERS })

    try {
      const result = await usersApi.get(pageNumber, itemsPerPage);

      dispatch({ type: GET_USERS_SUCCESS, payload: result })
    } catch (error) {
      dispatch({ type: GET_USERS_FAILURE })
    }
  }
};

export const getUserById = id => {
  return async dispatch => {
    dispatch({ type: GET_USER_BY_ID })

    try {
      const result = await usersApi.getById(id)

      dispatch({ type: GET_USER_BY_ID_SUCCESS, payload: result })
    } catch (error) {
      dispatch({ type: GET_USER_BY_ID_FAILURE })
    }
  }
}

export const saveUser = user => {
  return dispatch => {
    dispatch({ type: SAVE_USER })

    try {
      usersApi.save(user)

      dispatch({ type: SAVE_USER_SUCCESS })
    } catch (error) {
      dispatch({ type: SAVE_USER_FAILURE })
    }
  }
}

export const deleteUser = id => {
  return async dispatch => {
    dispatch({ type: DELETE_USER })

    try {
      const result = await usersApi.deleteUser(id)

      dispatch({ type: DELETE_USER_SUCCESS, payload: result })
    } catch (error) {
      dispatch({ type: DELETE_USER_FAILURE })
    }
  }
}
