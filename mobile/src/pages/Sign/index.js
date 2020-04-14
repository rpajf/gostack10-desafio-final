import React, { useState } from 'react';
import { Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import logo from '~/assets/icon1.png';
import { signInRequest } from '~/store/modules/auth/actions';

import { Container, SignInButton, FormArea, FormInput } from './styles';

export default function Sign() {
  const [id, setId] = useState('');

  const dispatch = useDispatch();

  const loading = useSelector(state => state.auth.loading);

  const handleLogin = () => {
    dispatch(signInRequest(id));
  };

  return (
    <Container>
      <Image source={logo} />
      <FormArea>
        <FormInput
          keyboardType="number-pad"
          placeholder="Digite o seu ID de cadastro"
          onSubmitEditing={handleLogin}
          value={id}
          onChangeText={setId}
        />
        <SignInButton loading={loading} onPress={handleLogin}>
          Entrar no sistema
        </SignInButton>
      </FormArea>
    </Container>
  );
}
