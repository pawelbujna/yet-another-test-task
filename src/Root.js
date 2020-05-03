import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import { Provider } from 'react-redux'

import Nav from './components/layout/navbar/Navbar'
import Container from './components/layout/container/Container'

import List from './views/Users/List'
import Add from './views/Users/Add'
import Edit from './views/Users/Edit'

const Root = ({ store }) => (
  <Provider store={store} >
    <Router>
      <div>

        <Nav />

        <Container>
          <Switch>
            <Route path="/" component={List} exact />
            <Route path="/add" component={Add} exact />
            <Route path="/edit/:id" component={Edit} exact />
          </Switch>
        </Container>
      </div>
    </Router>
  </Provider>
);

export default Root

