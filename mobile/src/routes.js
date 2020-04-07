import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Sign from '~/pages/Sign';
import Problems from '~/pages/Problems';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      headerMode={false}
      screenOptions={{
        headerStyle: { backgroundColor: '#7d40e7' },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen name="Details" component={Sign} />
    </Stack.Navigator>
  );
}
