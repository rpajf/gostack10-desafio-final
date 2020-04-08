import styled from 'styled-components';

import Cell from '~/components/Cell';

export const Container = styled.div`
  margin: 0 60px;
  display: flex;
  max-width: 1200px;
  height: 100%;
  flex-direction: column;
  box-sizing: border-box;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
`;

export const MyTable = styled.table`
  border-spacing: 20px;
  border-spacing: 0 1em;
`;

export const Info = styled.tr`
  border: none;
  font-size: 16px;
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
export const DeliveryCell = styled(Cell)``;

export const Title = styled.text`
  margin: 36px 0;
  font-size: 24px;

  font-weight: bold;
  font-family: 'Roboto';
`;

export const Search = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;

  button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    width: 130px;
    height: 36px;
    background: #7d40e7;
    color: #fff;
    font-weight: bold;

    transition: background 0.2s;
    text-transform: uppercase;

    border-radius: 4px;
    border: none;

    :hover {
      opacity: 0.9;
    }
  }
`;

export const PageNavigate = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    border: none;
    background: #f5f5f5;
  }
`;
