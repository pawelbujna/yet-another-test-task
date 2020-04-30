import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <div>
    <NavLink
      exact
      to="/"
      activeStyle={{
        textDecoration: 'none',
        color: 'black'
      }}>
      List
  </NavLink>
    <NavLink
      exact
      to="/add"
      activeStyle={{
        textDecoration: 'none',
        color: 'black'
      }}>
      Add
  </NavLink>
  </div>
);

export default Navbar

