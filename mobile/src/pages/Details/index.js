import React from 'react';
import { StatusBar } from 'react-native';

import {
  Container,
  DetailHeader,
  DeliveryDetails,
  DeliverySituation,
  ActionsView,
  Wrapper,
} from './styles';

export default function Details() {
  return (
    <>
      <StatusBar backgroundColor="#7D40E7" barStyle="light-content" />
      <Container>
        <DetailHeader />
        <Wrapper>
          <DeliveryDetails />
          <DeliverySituation />
          <ActionsView />
        </Wrapper>
      </Container>
    </>
  );
}
