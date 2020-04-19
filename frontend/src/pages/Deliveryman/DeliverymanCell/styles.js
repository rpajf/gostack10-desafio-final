import styled from 'styled-components';
import Cell from '~/components/Cell';
import Actions from '~/components/Actions';

export const DeliverymanItem = styled(Cell)``;

export const DelivermanActions = styled(Actions)`
  margin-left: 60px;
`;

export const Avatar = styled.div`
  width: 35px;
  height: 35px;
  margin: 10px 0 0 25px;
  border-radius: 50%;
  font-size: 16px;
  font-family: 'Roboto', Verdana, Geneva, Tahoma, sans-serif;
  color: #a28fd0;
  background: #f4effc 0% 0% no-repeat padding-box;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }
`;
