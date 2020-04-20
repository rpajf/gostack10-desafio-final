import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import { signOut } from '~/store/modules/auth/actions';
import NamePhoto from '~/components/NamePhoto';
import { baseURL } from '~/services/api';

import avatar from '~/assets/avatar.png';

import {
  ProfileContainer,
  Container,
  BolderText,
  NormalText,
  TextDiv,
  Avatar,
  LogoutBtn,
} from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const deliveryman = useSelector(state => state.user.profile);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <ProfileContainer>
        {deliveryman.avatar_id ? (
          <Avatar
            source={{
              uri: `http://${baseURL}/files/${deliveryman.avatar_id.path}`,
            }}
          />
        ) : (
          <NamePhoto name={deliveryman.name} />
        )}

        <TextDiv>
          <NormalText>Nome Completo</NormalText>
          <BolderText>{deliveryman.name}</BolderText>
        </TextDiv>
        <TextDiv>
          <NormalText>Email</NormalText>
          <BolderText>{deliveryman.email}</BolderText>
        </TextDiv>
        <TextDiv>
          <NormalText>Data de cadastro</NormalText>
          <BolderText>{deliveryman.created_at}</BolderText>
        </TextDiv>
        <LogoutBtn onPress={handleSignOut}>Logout</LogoutBtn>
      </ProfileContainer>
    </Container>
  );
}
