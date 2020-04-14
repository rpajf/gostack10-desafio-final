import styled from 'styled-components';

import Cell from '~/components/Cell';

export const Container = styled.div``;

export const DeliveryItem = styled(Cell)``;

export const ActionsDiv = styled.div`
  position: absolute;
  width: 150px;
  height: 120px;
  border: 1px solid #dadada;
  background: #fff;

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 10px);
    top: -10px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid transparent;
  }
`;
