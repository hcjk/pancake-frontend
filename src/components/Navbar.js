import React from 'react';
import PropTypes from 'prop-types';
import { Toolbar, NavLink } from 'rebass';

const Navbar = props => (
  <Toolbar>
    <NavLink>
      Pancake
    </NavLink>
    {props.user &&
    <NavLink ml="auto">
      Hi, {props.user.name}
    </NavLink>}
    {!props.user &&
    <NavLink ml="auto" href="#/login">
      Login
    </NavLink>}
  </Toolbar>
);

Navbar.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string
  }).isRequired
};

export default Navbar;
