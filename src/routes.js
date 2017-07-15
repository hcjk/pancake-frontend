import React from 'react';
import { Route } from 'react-router';

import App from './containers/App';
import Boards from './containers/Boards';

import Login from './containers/Login';
import Signup from './containers/Signup';

import NotFound from './containers/NotFound';

const checkAuth = (nextState, replace, callback) => {
  const token = localStorage.getItem('pancake-web-token');
  const nextLoc = nextState.location.pathname;

  if (!token && nextLoc !== '/login' && nextLoc !== '/signup') replace('/login');
  if (token && (nextLoc === '/login' || nextLoc === '/signup' || nextLoc === '/')) replace('/boards');
  return callback();
};

const routes = (
  <div>
    <Route path="/" onEnter={checkAuth} component={App}>
      <Route path="boards" component={Boards} />
    </Route>
    <Route path="/login" exact component={Login} />
    <Route path="/signup" exact component={Signup} />
    <Route path="*" component={NotFound} />
  </div>
);

export default routes;
