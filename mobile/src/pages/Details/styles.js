import styled from 'styled-components/native';
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
export const DetailHeader = styled.View`
  background: ${colors.primary};
  height: 155px;
`;

export const DeliveryDetails = styled.View`
  width: 335px;
  border-radius: 4px;
  background: #fff;
  margin-top: -65px;
  border: 1px solid #eee;
  height: 206px;
`;

export const DeliverySituation = styled.View`
  width: 335px;
  margin-top: 10px;
  height: 158px;
  background: #fff;
  border-radius: 4px;
  border: 1px solid #eee;
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

export const ButtonDiv = styled.View``;

export const ButtonsText = styled.View``;
