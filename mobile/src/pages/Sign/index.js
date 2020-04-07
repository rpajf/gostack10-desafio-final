import React from 'react';
import { Image } from 'react-native';

import logo from '~/assets/icon1.png';

import { Container, SignInButton, FormArea, FormInput } from './styles';

export default function Sign() {
  return (
    <Container>
      <Image source={logo} />
      <FormArea>
        <FormInput
          placeholder="Digite o seu ID de cadastro"
          keyboardType="numeric"
        />
        <SignInButton onPress={() => {}}>Entrar no sistema</SignInButton>
      </FormArea>
    </Container>
  );
}
