import { Alert } from 'react-native';

import { takeLatest, call, put, all } from 'redux-saga/effects';
import { signInSuccess, signFailure } from './actions';

import api from '~/services/api';

function* signIn({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.get, `/deliveryman/${id}/deliveries`);

    const deliveryman = response.data;

    yield put(signInSuccess(deliveryman));
  } catch (error) {
    Alert.alert('Seu id não existe');
    yield put(signFailure());
  }
}

// export function signOut() {}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  // takeLatest('@auth/SIGN_OUT', signOut),
]);
