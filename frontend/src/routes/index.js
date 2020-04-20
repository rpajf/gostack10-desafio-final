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
import DeliveryForm from '~/pages/Delivery/Form';
import DeliverymanForm from '~/pages/Deliveryman/Form';
import RecipientForm from '~/pages/Recipients/Form';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/deliveries" exact component={Delivery} isPrivate />
      <Route path="/deliveryman" exact component={Deliveryman} isPrivate />
      <Route path="/recipients" exact component={Recipients} isPrivate />
      <Route path="/problems" exact component={Problems} isPrivate />

      <Route path="/delivery/form" exact component={DeliveryForm} isPrivate />
      <Route
        path="/deliveryman/form"
        exact
        component={DeliverymanForm}
        isPrivate
      />
      <Route path="/recipient/form" exact component={RecipientForm} isPrivate />
    </Switch>
  );
}
