import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import { Provider } from 'react-redux'

import Nav from './components/Navbar'

import List from './views/Users/List'
import Add from './views/Users/Add'

const Root = ({ store }) => (
  <Provider store={store} >
    <Router>
      <div>

        <Nav />

        <Switch>
          <Route path="/" component={List} exact />
          <Route path="/add" component={Add} exact />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default Root

