import { IS_LOADING } from './../actions/loadingActions';
import { IS_NOT_LOADING } from './../actions/loadingActions';

const initialState = {
  isLoading: true
}

export default (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: true
      }
    case IS_NOT_LOADING:
      return {
        ...state,
        isLoading: false
      }
    default:
      return state;
  }
};
