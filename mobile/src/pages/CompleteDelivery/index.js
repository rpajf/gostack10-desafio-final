import React, { useState, useRef } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
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
      setFile(data.uri);
    }
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
        <SubmitButton>Enviar</SubmitButton>
      </Container>
    </>
  );
}
