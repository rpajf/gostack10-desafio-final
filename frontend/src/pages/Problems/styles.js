import styled from 'styled-components';

import Cell from '~/components/Cell';
import CellText from '~/components/CellText';

export const Container = styled.div`
  margin-left: 60px;
  display: flex;
  max-width: 1200px;
  flex-direction: column;
  justify-content: space-between;
`;
export const Title = styled.text`
  margin: 36px 0;
  font-size: 24px;
  font-weight: bold;
  font-style: 'Roboto';
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Search = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    width: 142px;
    height: 36px;
    background: #7d40e7;
    color: #fff;
    font-weight: bold;

    border-radius: 4px;
    border: none;
  }
`;
export const MyTable = styled.table`
  border-spacing: 20px;
  border-spacing: 0 1em;
`;

export const InfoText = styled.th`
  font-size: 16px;
  font-family: 'Roboto';
  text-align: left;
  padding-left: 30px;
  font-weight: bold;

  color: #434242;
  .actions {
    margin-left: 40px;
  }
`;
export const Info = styled.tr`
  border: none;
  font-size: 16px;
`;
export const DeliveryCell = styled(Cell)``;

export const Text = styled(CellText)``;

export const StatusDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 99px;
  height: 25px;
  border-radius: 4px;
`;
export const PageNavigate = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    border: none;
    background: #f5f5f5;
  }
`;
