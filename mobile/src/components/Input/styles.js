import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 15px;
  height: 46px;
  background: #fff;
  border-radius: 4px;
  flex-direction: row;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: '#9999',
})`
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
  color: #000;
`;
