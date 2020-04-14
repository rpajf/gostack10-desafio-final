import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';

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
export default function tabBar(signedIn = true) {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Dashboard"
        tabBarOptions={{
          activeTintColor: '#e91e63',
          inactiveTintColor: '#999999',
        }}
      >
        {/* // tabBarOptions={{
          activeTintColor: '#7D40E7',
          inactiveTintColor: '#999999',
          style: {
            height: 70,
            borderTopColor: '#DDDDDD',
          },

        }} */}

        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => AcountIcon,
            ReorderIcon,
          }}
        />
        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => AcountIcon,
            ReorderIcon,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
