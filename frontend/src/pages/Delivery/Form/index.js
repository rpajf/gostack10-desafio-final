import React from 'react';
import { FaAngleDown, FaCheck, FaAngleLeft } from 'react-icons/fa';
import { Form } from '@unform/web';
import { Scope } from '@unform/core';
import InputUnfrm from '~/components/InputUnfrm';
import BackButton from '~/components/Buttons/BackButton';
import SaveButton from '~/components/Buttons/SaveButton';
import history from '~/services/history';

import {
  Container,
  FormContent,
  FormHeader,
  FormField,
  MyText,
  FormInput,
  TextHeader,
} from './styles';

export default function FormDelivery() {
  function handleSubmit(data) {
    if (data.name === '') {
      alert('Nome invalido');
    }
    // eslint-disable-next-line no-console
    console.log(data);
  }

  const handleRedirect = url => history.push(url);

  return (
    <Container>
      <FormHeader>
        <TextHeader>Cadastro de encomendas</TextHeader>
        <div>
          <BackButton
            type="submit"
            onClick={() => handleRedirect('/deliveries')}
          />
          <SaveButton type="submit" onClick={handleSubmit} />
        </div>
      </FormHeader>
      <FormContent>
        <Form id="form1" onSubmit={handleSubmit}>
          <FormField>
            <MyText>Destinatário</MyText>
            <InputUnfrm
              type="text"
              name="delivery.Recipient.name"
              placeholder="Ludwig van Beethoven"
            />
          </FormField>
          <FormField>
            <MyText>Entregador</MyText>
            <FormInput type="text" name="asd" placeholder="John Doe" />
          </FormField>
        </Form>
      </FormContent>
    </Container>
  );
}
