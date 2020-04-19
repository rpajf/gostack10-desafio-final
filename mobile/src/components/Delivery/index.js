import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { api } from '~/services/api';
import StepProgress from './StepProgress';
import Details from '~/pages/Details';

import {
  Container,
  DeliveryHeader,
  DeliveryFooter,
  DeliveryViewText,
  FooterText,
  DetailsText,
} from './styles';

export default function Delivery() {
  const navigation = useNavigation();
  const auth = useSelector(state => state.auth);

  // async function handleWithdrawl() {}

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
      <StepProgress />
      <DeliveryFooter>
        <View
          style={{
            display: 'flex',
          }}
        >
          <FooterText>Data</FooterText>
          <FooterText>14/07/2020</FooterText>
        </View>
        <View
          style={{
            display: 'flex',
          }}
        >
          <FooterText>Cidade</FooterText>
          <FooterText>Sao luis</FooterText>
        </View>
        <TouchableOpacity>
          <DetailsText onPress={() => navigation.navigate('Details')}>
            Ver Detalhes
          </DetailsText>
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
