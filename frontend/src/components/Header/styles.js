import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  box-sizing: border-box;
  padding: 0 30px;
  border: 1px solid #dddd;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1300px;
  height: 64px;
  img {
    max-width: 135px;
    height: 26px;
  }

  nav {
    display: flex;

    flex-wrap: wrap;
    flex: 1;
    align-items: center;

    > :first-child {
      border-right: 2px solid #dddd;
      padding-right: 20px;
      margin-right: 20px;
    }
    a {
      padding-left: 20px;
      font-weight: bold;
      text-decoration: none;
      font-size: 14px;
      text-transform: uppercase;
      color: #9999;
      :hover {
        color: #191616;
      }
    }
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    button {
      margin-top: 5px;
      color: #de3b3b;
      border: 0;
      background: #fff;
    }
  }
`;
