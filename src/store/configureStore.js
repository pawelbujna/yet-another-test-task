import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from "redux-thunk";

import users from './reducers/users';
import loader from './reducers/loader';
import pagination from './reducers/pagination';

const configureStore = (preloadedState) => {
  const enhancers = [];

  if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension

    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  }

  return createStore(
    combineReducers({
      users,
      loader,
      pagination
    }),
    preloadedState,
    compose(
      applyMiddleware(thunk),
      ...enhancers
    )
  );
};

export default configureStore;
