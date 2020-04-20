import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { Form } from '@unform/mobile';

import { useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '~/styles/colors';

import { api } from '~/services/api';

import {
  Container,
  Wrapper,
  SendButton,
  ProblemHeader,
  ReportArea,
} from './styles';

export default function ReportProblem({ route, navigation }) {
  const { deliveryId } = route.params;
  const auth = useSelector(state => state.auth);

  const [description, setDescription] = useState(null);

  async function registerProblem() {
    if (!description) return alert('Você precisa descrever o problema!');

    const response = await ap.post(`/delivery/${auth.id}/problems`, {
      delivery_id: deliveryId,
      description,
    });

    if (response.data.delivery_problem) {
      alert(`Problema enviado com sucesso!`);
      navigation.goBack();
    }
  }

  return (
    <>
      <StatusBar backgroundColor="#7D40E7" barStyle="light-content" />
      <Container>
        <ProblemHeader />
        <Wrapper>
          <ReportArea
            onChangeText={text => setDescription(text)}
            multiline
            numberOfLines={2}
            placeholder="Inclua aqui o problema que ocorreu na
          entrega."
            blurOnSubmit
            style={{
              textAlignVertical: 'top',
            }}
          />
          <SendButton onPress={registerProblem}>Enviar</SendButton>
        </Wrapper>
      </Container>
    </>
  );
}
