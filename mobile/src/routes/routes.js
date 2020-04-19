import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabNav from './TabNav';
import DeliveryRoutes from './DeliveryRoutes';
import Sign from '~/pages/Sign';
import Dashboard from '~/pages/Dashboard';
import Tabs from '~/routes/TabNav';

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
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Entrega" component={TabNav} />
    </Stack.Navigator>
  );
}
