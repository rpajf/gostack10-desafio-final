import React, { useState, useRef } from 'react';
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
  Wrapper,
} from './styles';

export default function CompleteDelivery() {
  const camera = useRef(null);
  // const [camera, setCamera] = useState();
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

    formData.append('file', {
      name: file.filename,
      uri:
        Platform.OS === 'android' ? file.uri : file.uri.replace('file://', ''),
    });

    console.tron.log(formData)

    const sendFile = await api.post('/files', formData, {
      headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
      });

      console.tron.log(sendFile)
  }

  return (
    <>
      <Background />
      <Container>
        <Content>
          <Camera ref={camera} />
          <Capture onPress={takePicture}>
            <Icon name="photo-camera" size={25} color="#FFFFFF" />
          </Capture>
        </Content>
        <SubmitButton onPress={completeRequest}>Enviar</SubmitButton>
      </Container>
    </>
  );
}
