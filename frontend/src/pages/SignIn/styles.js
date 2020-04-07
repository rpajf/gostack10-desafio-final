import styled from 'styled-components';
import { darken } from 'polished';

export const Content = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;

  width: 100%;
  max-width: 360px;
  height: 425px;
  background-color: #fff;
  border-radius: 4px;
  form {
    display: flex;
    flex-direction: column;
    margin-top: 60px;
    height: 420px;

    button {
      height: 45px;
      margin: 15px 30px 60px;
      background-color: #7d40e7;
      color: #fff;
      border-radius: 4px;
      font-weight: bold;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.1, '#7D40E7')};
      }
    }
    span {
      color: #f64c75;
      align-self: flex-start;
      margin-left: 30px;
      font-weight: bold;
    }
  }
  input {
    width: 300px;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid #999;
    margin: 9px 30px 0px;
    padding: 0 15px;
    height: 45px;
    :nth-child(2) {
      margin-bottom: 10px;
    }
  }
`;
export const Image = styled.image`
  margin-top: 60px;
  width: 258, 6px;
  height: 44px;
`;

export const Texto = styled.text`
  margin: 0 30px 0px;
  text-align: initial;
  font-weight: bold;
  text-transform: uppercase;
`;
