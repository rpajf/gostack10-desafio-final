import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { api } from '~/services/api';
import StepProgress from './StepProgress';
import Details from '~/pages/Details';

import { format, parseISO } from 'date-fns';

import {
  Container,
  DeliveryHeader,
  DeliveryFooter,
  DeliveryViewText,
  FooterTextTitle,
  FooterText,
  DetailsText,
} from './styles';

export default function Delivery({ delivery }) {
  const navigation = useNavigation();
  const auth = useSelector(state => state.auth);

  // async function handleWithdrawl() {}
  const goToDelivery = () => {
    return navigation.navigate('Details');
  };

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
        <DeliveryViewText>{delivery.id}</DeliveryViewText>
      </DeliveryHeader>
      <StepProgress status={delivery.status} />
      <DeliveryFooter>
        <View
          style={{
            display: 'flex',
          }}
        >
          <FooterTextTitle>Data</FooterTextTitle>
          <FooterText>
            {delivery.created_at &&
              format(parseISO(delivery.created_at), 'dd/MM/yyyy')}
          </FooterText>
        </View>
        <View
          style={{
            display: 'flex',
          }}
        >
          <FooterTextTitle>Cidade</FooterTextTitle>
          <FooterText>
            {delivery.Recipient && delivery.Recipient.city}
          </FooterText>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Details', { delivery })}
        >
          <DetailsText>Ver Detalhes</DetailsText>
        </TouchableOpacity>
      </DeliveryFooter>
    </Container>
  );
}

// Delivery.propTypes = {
//   navigation: PropTypes.shape({
//     navigate: PropTypes.func.isRequired,
//   }).isRequired,
// };
