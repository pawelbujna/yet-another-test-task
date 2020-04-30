import { SET_USERS } from './actions';

const initialState = {
  users: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.payload.users
      }
    default:
      return state;
  }
};
