import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PropTypes from 'prop-types';
import Sign from '~/pages/Sign';
import Problems from '~/pages/Problems';
import Dashboard from '~/pages/Dashboard';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function createRouter(signedIn = false) {
  return !signedIn ? (
    <Stack.Navigator
      headerMode={false}
      screenOptions={{
        headerStyle: { backgroundColor: '#7d40e7' },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen name="SignIn" component={Sign} />
    </Stack.Navigator>
  ) : (
    <Tab.Navigator>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        screenOptions={{ headerTintColor: '#000000' }}
      />
    </Tab.Navigator>
  );
}
