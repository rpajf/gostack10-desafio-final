import styled from 'styled-components/native';
import { RNCamera } from 'react-native-camera';
import { TouchableOpacity } from 'react-native';
import Button from '~/components/Button';
import colors from '~/styles/colors';

export const Container = styled.View`
  flex: 1;

  background: #000;
`;
export const Background = styled.View`
  background: ${colors.primary};
  height: 155px;
`;
export const Camera = styled(RNCamera)`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 20px;
`;
export const Content = styled.View`
  border-radius: 4px;
  margin-top: -60px;
  /* padding: 13px; */
  flex: 1;
  overflow: hidden;
  background: #fff;
  margin-bottom: 20px;
`;

export const Capture = styled(TouchableOpacity)`
  background: rgba(0, 0, 0, 0.3);
  align-self: center;
  height: 60px;
  width: 60px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 20px;
`;

export const SubmitButton = styled(Button)`
  background: ${colors.primary};
  height: 45px;
`;
