import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  DeliveryHeader,
  DeliveryFooter,
  DeliveryViewText,
} from './styles';

export default function Delivery() {
  return (
    <Container>
      <DeliveryHeader>
        <Icon
          name="local-shipping"
          size={24}
          color="#7D40E7"
          style={{
            marginLeft: 14.5,
            marginRight: 10,
          }}
        />
        <DeliveryViewText>Encomenda 01</DeliveryViewText>
      </DeliveryHeader>
      <DeliveryFooter />
    </Container>
  );
}
