import 'react-native-gesture-handler';
import * as React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import App from './App';

import './config/ReactotronConfig';
// needs to come before the store
import { store, persistor } from './store';

export default function Index() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StatusBar barStyle="light-content" />
          <App />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}
