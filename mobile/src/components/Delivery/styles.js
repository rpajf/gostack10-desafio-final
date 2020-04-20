import styled from 'styled-components/native';
import Text from '~/components/Text';
import Button from '~/components/Button';

export const Container = styled.View`
  display: flex;
  flex: 1;
  border: 1px solid #f8f9fd;
  margin: 10.5px 20px 28.5px 20px;
`;

export const DeliveryFooter = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 335px;
  margin-top: 67px;
  height: 64px;
  border-radius: 4px;

  background: #f8f9fd;
`;

export const FooterTextTitle = styled(Text)`
  margin-left: 10px;
  margin-right: 10px;
  font-size: 10px;
  color: #999999;
  font-weight: bold;
`;

export const FooterText = styled(Text)`
  margin-left: 10px;
  margin-right: 10px;
  font-size: 13px;
  color: #444444;
  font-weight: bold;
`;

export const DeliveryHeader = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;
export const DetailsText = styled(Text)`
  font-size: 12px;
  color: #7d40e7;
  font-weight: bold;
  margin-left: 15px;
  margin-right: 10px;
`;

export const DeliveryViewText = styled(Text)`
  font-size: 14px;
  color: #7d40e7;
  font-weight: bold;
`;
