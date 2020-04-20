import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Platform } from 'react-native';

import { api } from '~/services/api';

import {
  Container,
  Background,
  Capture,
  SubmitButton,
  Camera,
  Content,
} from './styles';

export default function CompleteDelivery({ route, navigation }) {
  const { deliveryId } = route.params;

  const camera = useRef(null);
  const auth = useSelector(state => state.auth);

  const [file, setFile] = useState();

  async function takePicture() {
    if (camera) {
      const options = { quality: 0.5, base64: true };
      const data = await camera.current.takePictureAsync(options);
      setFile(data);
    }
  }

  async function completeRequest() {
    const formData = new FormData();
    const end_date = new Date();

    formData.append('file', {
      type: 'image/jpg',
      uri: file.uri,
      name: `signature-${deliveryId}.jpg`,
    });

    const sendFile = await api.post('/files', formData, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    });

    console.tron.log(sendFile);

    const response = await api.post(`/deliveryman/${auth.id}/finish`, {
      delivery_id: deliveryId,
      signature_id: sendFile.data.id,
      end_date: end_date.toISOString(),
    });

    if (response.data) {
      alert('Entrega completa!');
      navigation.goBack();
    }
  }

  return (
    <>
      <Background />
      <Container>
        <Content>
          <Camera ref={camera} captureAudio={false} />
          <Capture onPress={takePicture}>
            <Icon name="photo-camera" size={25} color="#FFFFFF" />
          </Capture>
        </Content>
        <SubmitButton onPress={completeRequest}>Enviar</SubmitButton>
      </Container>
    </>
  );
}
