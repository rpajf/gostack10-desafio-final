import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StatusBar, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { signOut } from '~/store/modules/auth/actions';
import avatar from '~/assets/avatar.png';
import Delivery from '~/components/Delivery';

import { baseURL, api } from '~/services/api';

import {
  Container,
  DashHeader,
  Avatar,
  Small,
  DashPhoto,
  BoldText,
  OptionsText,
  HeaderContainer,
  OptionsView,
  ButtonsView,
} from './styles';

export default function Dashboard({ navigation }) {
  const dispatch = useDispatch();
  const deliveryman = useSelector(state => state.user.profile);
  const auth = useSelector(state => state.auth);
  const [active, setActive] = useState(false);

  // const deliveryman = useSelector(store => store.user.profile);
  const [deliveries, setDeliveries] = useState([]);
  const [filter, setFilter] = useState('PENDENTE');

  function handleSignOut() {
    dispatch(signOut());
  }

  function handlePending() {
    setFilter('PENDENTE');
  }

  function handleCompleted() {
    setFilter('RETIRADA');
  }
  async function loadCompletedDeliveries() {
    await api.get(`deliveryman/${auth.id}/deliveries`);
  }
  async function loadPendingDeliveries() {
    await api.get(`deliveryman/${auth.id}/completed`);
  }
  function fetchDeliveries() {
    // eslint-disable-next-line default-case
    switch (filter) {
      case 'PENDENTE':
        loadPendingDeliveries();
        break;
    }
    // eslint-disable-next-line default-case
    switch (filter) {
      case 'RETIRADA':
        loadCompletedDeliveries();
        break;
    }
  }

  useEffect(() => {
    fetchDeliveries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <DashHeader>
        {deliveryman.avatar_id ? (
          <Avatar
            source={{
              uri: `http://${baseURL}/files/${deliveryman.avatar_id.path}`,
            }}
          />
        ) : (
          <DashPhoto name={deliveryman.name} />
        )}
        <HeaderContainer>
          <Small>Bem vindo de volta, </Small>
          <BoldText>{deliveryman.name}</BoldText>
        </HeaderContainer>
        <Icon
          name="exit-to-app"
          size={24}
          color="#E74040"
          onPress={handleSignOut}
          style={{ marginLeft: 62, marginRight: 32 }}
        />
      </DashHeader>
      <OptionsView>
        <BoldText>Entregas</BoldText>
        <ButtonsView>
          <TouchableOpacity
            onPress={() => {
              setActive(true);
            }}
          >
            <OptionsText
              style={{
                color: active ? '#7D40E7' : '#999',
                textDecorationLine: active ? 'underline' : 'none',
              }}
            >
              Pendentes
            </OptionsText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setActive(false);
            }}
          >
            <OptionsText
              style={{
                color: active ? '#999' : '#7e40e7',
                textDecorationLine: active ? 'none' : 'underline',
              }}
            >
              Entregues
            </OptionsText>
          </TouchableOpacity>
        </ButtonsView>
      </OptionsView>

      <Delivery />
    </Container>
  );
}
