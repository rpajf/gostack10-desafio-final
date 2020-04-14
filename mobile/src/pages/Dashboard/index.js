import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import colors from '~/styles/colors';
import avatar from '~/assets/avatar.png';
import {
  Container,
  DashHeader,
  Avatar,
  Text,
  BoldText,
  HeaderContainer,
  Pending,
  OptionsView,
  Delivery,
  Delivered,
} from './styles';

export default function Dashboard() {
  return (
    <Container>
      <DashHeader>
        <Avatar source={avatar} />
        <HeaderContainer>
          <Text>Bem vindo de volta, </Text>
          <BoldText>Entregador</BoldText>
        </HeaderContainer>
        <Icon
          name="exit-to-app"
          size={18}
          color="#E74040"
          style={{ marginLeft: 62, marginRight: 32 }}
        />
      </DashHeader>
      <OptionsView>
        <BoldText>Entregas</BoldText>
        <Pending>
          <Text>Pendetes</Text>
        </Pending>
        <Delivered>
          <Text>Entregues</Text>
        </Delivered>
      </OptionsView>
      <Delivery />
    </Container>
  );
}
