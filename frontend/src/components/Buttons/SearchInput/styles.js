import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #fff;
  padding-left: 10px;
  margin-bottom: 10px;
  width: 227px;
  height: 36px;
  border-radius: 4px;
  border: 1px solid #ddd;

  input {
    margin-right: 40px;
    color: #999;
    border-style: none;
    align-self: center;

    font-style: 'Roboto';
    font-size: 14px;
    ::placeholder {
      color: #a39999;
    }
  }
`;
