/* eslint-disable react/prop-types */
import * as React from 'react';
import { StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Profile from '~/pages/Profile';
import ReportProblem from '~/pages/ReportProblem';
import SeeProblems from '~/pages/SeeProblems';
import CompleteDelivery from '~/pages/CompleteDelivery';
import DeliveryRoutes from '../DeliveryRoutes';
import colors from '~/styles/colors';
import Details from '~/pages/Details';

const Tab = createBottomTabNavigator();

export default function TabNav() {
  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: colors.primary,
          inactiveTintColor: '#ccc',
          labelStyle: {
            fontSize: 14,
          },
          style: {
            backgroundColor: '#fff',
            height: 55,
            paddingTop: 8,
            paddingBottom: 8,
          },
          keyboardHidesTabBar: true,
        }}
      >
        <Tab.Screen
          name="Perfil"
          component={Profile}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="account-circle" size={28} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Entregas"
          component={DeliveryRoutes}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="reorder" size={28} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}
