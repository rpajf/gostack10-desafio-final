import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import * as Yup from 'yup';
import { signInRequest } from '~/store/modules/auth/actions';

import Wrapper from '~/pages/_layouts/auth';
import { Image, Texto, Content } from './styles';

import logo from '~/assets/logo1.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido')
    .required('Obrigatório'),
  password: Yup.string().required('A senha é obrigatoria'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <Wrapper>
      <Content>
        <Image>
          <img src={logo} alt="FastFeet" />
        </Image>
        <Form schema={schema} onSubmit={handleSubmit}>
          <Texto>Seu-Email</Texto>
          <Input name="email" type="email" />
          <Texto>Sua Senha</Texto>
          <Input name="password" type="password" />
          <button type="submit">Entrar no sistema</button>
          {loading ? 'Carregando...' : ''}
        </Form>
      </Content>
    </Wrapper>
  );
}
