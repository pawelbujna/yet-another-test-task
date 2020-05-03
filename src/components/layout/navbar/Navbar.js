import React from 'react';
import { NavLink } from "react-router-dom";

import Container from './../container/Container';

import './Navbar.css';

const Navbar = () => (
  <nav>
    <Container className="navbar-wrapper">
      <NavLink
        className="nav-link"
        exact
        to="/"
        activeClassName="active">
        List
    </NavLink>
      <NavLink
        className="nav-link"
        exact
        to="/add">
        Add
    </NavLink>
    </Container>
  </nav>
);

export default Navbar

