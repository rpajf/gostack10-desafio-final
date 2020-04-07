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

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  margin: 10px;
`;

export const InfoText = styled.text`
  font-size: 16px;
  font-style: 'Roboto';
  font-weight: bold;
  margin: 10px 25px;
  color: #434242;
`;

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
