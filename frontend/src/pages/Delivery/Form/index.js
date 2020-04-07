import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import BackButton from '~/components/Buttons/BackButton';
import SaveButton from '~/components/Buttons/SaveButton';
import history from '~/services/history';

import {
  Container,
  FormContent,
  FormHeader,
  FormField,
  Text,
  TextHeader,
} from './styles';

export default function FormDelivery() {
  function handleNavigate() {
    history.replace('/delivery');
  }
  return (
    <Container>
      <FormHeader>
        <TextHeader>Edição de encomendas</TextHeader>
        <div>
          <BackButton onClick={handleNavigate} /> <SaveButton />
        </div>
      </FormHeader>
      <FormContent>
        <div>
          <FormField>
            <Text>Destinatário</Text>
            <Input type="text" name="name" placeholder="John Doe" />
          </FormField>
          <FormField>
            <Text>Entregador</Text>
            <Input type="text" name="name" placeholder="Gail Wynand" />
          </FormField>
        </div>
        <FormField className="last-field">
          <Text>Nome do produto</Text>
          <Input
            type="text"
            name="name"
            placeholder="Macbook Pro 2015"
            className="bottom-input"
          />
        </FormField>
      </FormContent>
    </Container>
  );
}
