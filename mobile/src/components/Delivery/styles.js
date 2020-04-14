import styled from 'styled-components/native';
import Text from '~/components/Text';

export const Container = styled.View`
  display: flex;
  width: 335px;

  height: 169px;
  border: 1px solid #f8f9fd;
  margin: 10.5px 20px 28.5px 20px;
`;

export const DeliveryFooter = styled.View`
  width: 335px;
  margin-top: 64px;
  height: 64px;

  background: #f8f9fd;
`;
export const DeliveryHeader = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

export const DeliveryViewText = styled(Text)`
  font-size: 14px;
  color: #7d40e7;
  font-weight: bold;
`;
