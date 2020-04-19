import styled from 'styled-components/native';
import Text from '~/components/Text';
import colors from '~/styles/colors';

import NamePhoto from '~/components/NamePhoto';

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

export const Small = styled(Text)`
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
  width: 340px;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonsDiv = styled.View`
  display: flex;
  flex-direction: row;
`;
export const Pending = styled.Button`
  margin-right: 15px;
`;
export const OptionsText = styled.Text`
  font-size: 12px;
  color: #999;
  font-weight: bold;
  margin-left: 15px;
`;

export const DeliveryViewText = styled(Text)`
  font-size: 14px;
  color: #7d40e7;
  font-weight: bold;
`;
export const Delivered = styled.Button``;

export const Delivery = styled.View`
  display: flex;
  width: 335px;

  height: 169px;
  border: 1px solid #f8f9fd;
  margin: 10.5px 20px 28.5px 20px;
`;

export const ButtonsView = styled.View`
  flex-direction: row;
`;

export const PointOne = styled.View`
  width: 10px;
  height: 10px;
  background: ${colors.primary};
  border-radius: 5px;
  border-width: 1px;
`;
export const DashPhoto = styled(NamePhoto)`
  width: 53px;
  height: 53px;
  
`;
