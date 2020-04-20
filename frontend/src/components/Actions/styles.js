import styled from 'styled-components';

export const Container = styled.div`
  width: 140px;
  height: 70px;
  margin-top: 10px;
  margin-left: 25px;
  padding: 3px;
  background: #fff;
  position: absolute;
  border-radius: 4px;
  border: 1px solid #dadada;
  display: ${props => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  &::before {
    content: '';
    position: absolute;
    left: calc(60% - 10px);
    top: -10px;
    width: 0;
    background: #fff;
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
