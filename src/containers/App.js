import React from 'react';
import PropTypes from 'prop-types';

import Navbar from '../components/Navbar';

const App = props => (
  <div>
    <Navbar user={props.auth.user} />
    {props.children}
  </div>
);

App.propTypes = {
  auth: PropTypes.shape({
    user: PropTypes.string.isRequired
  }).isRequired,
  children: PropTypes.node.isRequired
};

export default App;
