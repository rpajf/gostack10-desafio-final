import * as React from 'react';
import { StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Profile from '~/pages/Profile';
import DeliveryRoutes from '../DeliveryRoutes';
import colors from '~/styles/colors';
import Details from '~/pages/Details';

const Tab = createBottomTabNavigator();

function AcountIcon() {
  return (
    <Icon
      style={{ marginTop: 10 }}
      name="account-circle"
      size={24}
      color="#999999"
    />
  );
}
function ReorderIcon() {
  return (
    <Icon style={{ marginTop: 10 }} name="reorder" size={24} color="#999999" />
  );
}

export default function TabNav() {
  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: colors.primary,
        }}
      >
        <Tab.Screen
          name="Entregas"
          component={DeliveryRoutes}
          options={{
            tabBarIcon: () => <ReorderIcon />,
          }}
        />
        <Tab.Screen
          name="Details"
          component={Details}
          options={{
            tabBarIcon: () => <AcountIcon />,
          }}
        />
      </Tab.Navigator>
    </>
  );
}
