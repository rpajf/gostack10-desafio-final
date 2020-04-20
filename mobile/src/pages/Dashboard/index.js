import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  View,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Text,
} from 'react-native';
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
  Listed,
} from './styles';

export default function Dashboard({ navigation }) {
  const dispatch = useDispatch();
  const deliveryman = useSelector(state => state.user.profile);
  const auth = useSelector(state => state.auth);

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
    const response = await api.get(`deliveryman/${auth.id}/completed`);
    console.tron.log(response);
    setDeliveries(response.data);
  }
  async function loadPendingDeliveries() {
    const response = await api.get(`deliveryman/${auth.id}/deliveries`);
    console.tron.log(response);
    setDeliveries(response.data);
  }
  function fetchDeliveries() {
    switch (filter) {
      case 'PENDENTE':
        loadPendingDeliveries();
        break;
    }
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
          <TouchableOpacity onPress={handlePending}>
            <OptionsText
              style={{
                color: filter === 'PENDENTE' ? '#7D40E7' : '#999',
                textDecorationLine:
                  filter === 'PENDENTE' ? 'underline' : 'none',
              }}
            >
              Pendentes
            </OptionsText>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCompleted}>
            <OptionsText
              style={{
                color: filter === 'RETIRADA' ? '#7e40e7' : '#999',
                textDecorationLine:
                  filter === 'RETIRADA' ? 'underline' : 'none',
              }}
            >
              Entregues
            </OptionsText>
          </TouchableOpacity>
        </ButtonsView>
      </OptionsView>
      <View>
        <Listed
          showsVerticalScrollIndicator={false}
          data={deliveries}
          keyExtractor={delivery => String(delivery.id)}
          renderItem={({ item }) => <Delivery delivery={item} />}
        />
      </View>
    </Container>
  );
}
