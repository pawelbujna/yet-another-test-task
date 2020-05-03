import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  GET_USER_BY_ID,
  GET_USER_BY_ID_SUCCESS,
  GET_USER_BY_ID_FAILURE,
  SAVE_USER,
  SAVE_USER_SUCCESS,
  SAVE_USER_FAILURE,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE
} from './../actions/userActions';

const initialState = {
  list: [],
  currentUser: {},
  loading: true,
  hasError: false,
  currentPage: 1,
  pagesAmount: 0
}

const succesObj = {
  loading: false,
  hasError: false
}

const errorObj = {
  loading: false,
  hasError: true
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        loading: true
      }
    case GET_USERS_SUCCESS:
      return {
        ...state,
        list: action.payload.data,
        currentPage: action.payload.pagination.currentPage,
        pagesAmount: action.payload.pagination.pagesAmount,
        ...succesObj
      }
    case GET_USERS_FAILURE:
      return {
        ...state,
        ...errorObj
      }
    case GET_USER_BY_ID:
      return {
        ...state,
        loading: true
      }
    case GET_USER_BY_ID_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        ...succesObj
      }
    case GET_USER_BY_ID_FAILURE:
      return {
        ...state,
        currentUser: action.payload,
        ...errorObj
      }
    case SAVE_USER:
      return {
        ...state,
        loading: true
      }
    case SAVE_USER_SUCCESS:
      return {
        ...state,
        ...succesObj
      }
    case SAVE_USER_FAILURE:
      return {
        ...state,
        ...errorObj
      }
    case DELETE_USER:
      return {
        ...state,
        loading: true
      }
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        list: action.payload.data,
        currentPage: action.payload.pagination.currentPage,
        pagesAmount: action.payload.pagination.pagesAmount,
        ...succesObj
      }
    case DELETE_USER_FAILURE:
      return {
        ...state,
        ...errorObj
      }
    default:
      return state;
  }
};
