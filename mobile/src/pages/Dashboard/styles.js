import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background-color: #fff;
  display: flex;
  align-items: center;
  flex: 1;
`;

export const DashHeader = styled.View`
  display: flex;
  flex-direction: row;
  margin: 40px 32px 22.5px 20px;
  width: 323px;
  height: 70px;
  align-items: center;
`;
export const HeaderContainer = styled.View`
  margin-left: 12px;
`;

export const Avatar = styled.Image`
  width: 53px;
  height: 53px;
`;

export const Text = styled.Text`
  font-size: 12px;
`;
export const BoldText = styled.Text`
  font-size: 22px;
  font-weight: bold;
`;

export const ListDelivery = styled.Text``;

export const OptionsView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Pending = styled(RectButton)``;
export const Delivered = styled(RectButton)``;

export const Delivery = styled.View`
  width: 335px;
  height: 169px;
  border: 1px solid #f8f9fd;
  margin: 10.5px 20px 28.5px 20px;
`;
