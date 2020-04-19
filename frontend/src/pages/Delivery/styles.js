import styled from 'styled-components';

import CellText from '~/components/CellText';

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
  padding-right: 10px;
  text-align: left;
  font-weight: bold;

  color: #434242;
  :not(:last-child) {
    padding-left: 27px;
  }
  :last-child {
    text-align: right;
    padding-right: 20px;
  }
`;

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
    padding-left: 10px;
  }
`;
export const WrapperDelivery = styled.div`
  width: 175px;
  height: 227px;
  background: #fff;
`;

export const WrapperInfo = styled.div``;
