import React from 'react';
import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import colors from '~/styles/colors';
import avatar from '~/assets/avatar.png';
import Delivery from '~/components/Delivery';
import {
  Container,
  DashHeader,
  Avatar,
  Small,
  BoldText,
  OptionsText,
  HeaderContainer,
  Pending,
  OptionsView,
  ButtonsView,
  Delivered,
} from './styles';

export default function Dashboard() {
  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <DashHeader>
        <Avatar source={avatar} />
        <HeaderContainer>
          <Small>Bem vindo de volta, </Small>
          <BoldText>Entregador</BoldText>
        </HeaderContainer>
        <Icon
          name="exit-to-app"
          size={24}
          color="#E74040"
          style={{ marginLeft: 62, marginRight: 32 }}
        />
      </DashHeader>
      <OptionsView>
        <BoldText>Entregas</BoldText>
        <ButtonsView>
          <OptionsText>Pendentes</OptionsText>
          <OptionsText>Entregues</OptionsText>
        </ButtonsView>
      </OptionsView>
      <Delivery />
    </Container>
  );
}
