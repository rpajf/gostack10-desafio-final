import React from 'react';

import { Container, DeliveryItem, ActionsDiv } from './styles';
import CellText from '~/components/CellText';

export default function DeliveryCell({ ...props }) {
  return (
    <Container>
      <DeliveryItem {...props}>
        <CellText {...props}>
          <button type="button">...</button>
          <ActionsDiv />
        </CellText>
      </DeliveryItem>
    </Container>
  );
}
