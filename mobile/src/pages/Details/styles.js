import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import colors from '~/styles/colors';

import Text from '~/components/Text';

export const Container = styled.View`
  background: #fff;
  flex: 1;
`;
export const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  width: 335px;
  margin-left: 30px;
`;

export const TextView = styled.View`
  margin-top: 5px;
  margin-bottom: 8px;
`;
export const DetailHeader = styled.View`
  background: ${colors.primary};
  height: 155px;
`;

export const DeliveryDetails = styled.View`
  width: 335px;
  padding: 10px 0 0 14px;
  border-radius: 4px;
  background: #fff;
  margin-top: -65px;
  border: 1px solid #eee;
  height: 206px;
`;

export const HeaderView = styled.View`
  display: flex;
  flex-direction: row;
`;
export const DetailsHeaderText = styled(Text)`
  font-size: 14px;
  color: ${colors.primary};
  font-weight: bold;
`;
export const DetailsText = styled(Text)`
  font-size: 14px;
  margin-top: 5px;
  color: #666666;
`;
export const DetailsBolderText = styled(Text)`
  font-size: 14px;
  color: #99999999;
  text-transform: uppercase;
  font-weight: bold;
`;

export const DeliverySituation = styled.View`
  width: 335px;
  margin-top: 10px;
  height: 158px;
  background: #fff;
  padding: 14px;
  border-radius: 4px;
  border: 1px solid #eee;
`;
export const DateView = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;
export const ActionsView = styled.View`
  display: flex;
  flex-direction: row;
  width: 335px;

  background: #f8f9fd;
  height: 83px;
  margin-top: 10px;
  border-radius: 4px;
  border: 1px solid #eee;
`;

export const ButtonsView = styled(TouchableOpacity)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 83px;
  flex: 1;
  border: 1px solid #eee;
`;

export const ButtonsText = styled(Text)`
  margin-top: 4px;
  font-size: 12px;
  color: #9999;
  text-align: center;
`;
