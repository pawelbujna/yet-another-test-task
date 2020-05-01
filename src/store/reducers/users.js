import { GET_USERS } from './../actions/userActions';

const initialState = {
  list: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        list: action.payload
      }
    default:
      return state;
  }
};
