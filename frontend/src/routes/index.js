import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';

import Dashboard from '../pages/Dashboard';
import Delivery from '~/pages/Delivery';
import Recipients from '~/pages/Recipients';
import Deliveryman from '~/pages/Deliveryman';
import Problems from '~/pages/Problems';
// teste
import Form from '~/pages/Delivery/Form';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/delivery" component={Delivery} isPrivate />
      <Route path="/entregadores" component={Deliveryman} isPrivate />
      <Route path="/destinatarios" component={Recipients} isPrivate />
      <Route path="/problemas" component={Problems} isPrivate />

      <Route path="/form" component={Form} isPrivate />
    </Switch>
  );
}
