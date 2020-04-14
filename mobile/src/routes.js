import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PropTypes from 'prop-types';
import Sign from '~/pages/Sign';
import Problems from '~/pages/Problems';
import Dashboard from '~/pages/Dashboard';

const Stack = createStackNavigator();

export default function createRouter(signedIn = false) {
  return (
    <Stack.Navigator
      headerMode={false}
      screenOptions={{
        headerStyle: { backgroundColor: '#7d40e7' },
        headerTintColor: '#fff',
      }}
    >
      {!signedIn ? (
        <Stack.Screen name="SignIn" component={Sign} />
      ) : (
        <Stack.Screen name="Dashboard" component={Dashboard} />
      )}
    </Stack.Navigator>
  );
}
