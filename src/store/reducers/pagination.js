import { SET_PAGINATION } from './../actions/paginationActions';

const initialState = {
  currentPage: 1,
  pagesAmount: 5
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGINATION:
      return {
        ...state,
        currentPage: action.payload.currentPage,
        pagesAmount: action.payload.pagesAmount
      }
    default:
      return state;
  }
};
