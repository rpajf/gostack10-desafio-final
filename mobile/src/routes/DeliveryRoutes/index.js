import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import SeeProblems from '~/pages/SeeProblems';
import ReportProblem from '~/pages/ReportProblem';
import CompleteDelivery from '~/pages/CompleteDelivery';

import Details from '~/pages/Details';
import Dashboard from '~/pages/Dashboard';

// import { Container } from './styles';

const Stack = createStackNavigator();

export default function DeliveryRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTintColor: '#fff',
        headerTransparent: true,
      }}
      initialRouteName="Dashboard"
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name="Dashboard"
        component={Dashboard}
      />
      <Stack.Screen
        name="ReportProblem"
        component={ReportProblem}
        options={{
          title: 'Informar problemas',
        }}
      />
      <Stack.Screen
        name="CompleteDelivery"
        component={CompleteDelivery}
        options={{
          title: 'Completar entrega',
        }}
      />
      <Stack.Screen
        name="SeeProblems"
        component={SeeProblems}
        options={{
          title: 'Ver problemas',
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          title: 'Detalhes da encomenda',
        }}
      />
    </Stack.Navigator>
  );
}
