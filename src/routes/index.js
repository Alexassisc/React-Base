import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Page404 from '../pages/Page404';
// eslint-disable-next-line no-unused-vars
import Header from '../components/Header';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="*" component={Page404} />
    </Switch>
  );
}
