import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import AuthLayout from '~/pages/_layouts/auth';
import DefaultLayout from '~/pages/_layouts/default';

import { store } from '../store';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
  // The component is a prop that the route can receive,
  // in this case, this prop is renamed to Component
  // Doing this, allow the usage of <Component />
}) {
  const { signed } = store.getState().auth;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;
  /* Really good possibility with the components:
     a JSX element can modify its value depending on the

  */

  return (
    <Route
      {...rest}
      render={props => (
        /* navigation, history all props */
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  /*
  if the prop is not required a default value must be set,
  The properties received by the Routes can be an React element or
  a functional component
   */
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
