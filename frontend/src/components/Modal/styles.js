import styled from 'styled-components';

export const Container = styled.div`
  width: 140px;
  height: 100px;
  margin-top: 10px;
  padding: 3px;
  background: #fff;
  margin-left: 15px;
  position: absolute;
  border: 1px solid #dadada;
  border-radius: 4px;
  display: ${props => (props.visible ? 'block' : 'none')};

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 10px);
    top: -10px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #eee;
  }
`;

export const ButtonsLine = styled.div`
  height: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    margin-left: 15px;
  }

  button {
    margin-left: 5px;

    cursor: pointer;
    font-size: 12px;
    font-weight: 300;
    color: #999999;
  }

  :not(:last-child) {
    border-bottom: 1px solid #eeeeee;
  }
`;

export const Wrapper = styled.div`
  width: 450px;
  height: 350px;
  border-radius: 4px;
  box-shadow: 0px 0px 10px #00000033;
  background-color: #fff;
  margin: 0 auto;
  margin-top: 174px;
  padding: 25px;
  font-family: 'Roboto', Verdana, Geneva, Tahoma, sans-serif;
`;
