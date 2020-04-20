import styled from 'styled-components';

export const Text = styled.td`
  font-size: 16px;
  border-collapse: collapse;
  border: none;
  padding-top: 15px;
  padding-bottom: 20px;
  border-radius: 4px;
  font-family: 'Roboto';
  text-align: left;

  color: #6666;
  :not(:last-child) {
    padding-left: 27px;
  }
  :last-child {
    text-align: right;
    padding-right: 28px;
  }

  button {
    display: inline-block;
    border: none;
    font-size: 16px;
    font-family: 'Roboto';
    text-align: right;
    font-weight: bold;
    color: #6666;
    :hover {
      color: #3a2e2e;
    }
  }
`;
