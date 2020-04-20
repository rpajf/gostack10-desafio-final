import styled from 'styled-components/native';
import colors from '~/styles/colors';

import Button from '~/components/Button';

export const Container = styled.View`
  background: #fff;
  flex: 1;
`;

export const ProblemHeader = styled.View`
  background: ${colors.primary};
  height: 155px;
`;

export const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SendButton = styled(Button)`
  background: ${colors.primary};
  margin-top: 20px;
  width: 335px;
  height: 45px;
`;

export const ReportArea = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  font-family: 'Roboto-Regular';
  width: 335px;
  font-size: 16px;
  padding: 20px 20px 0 20px;
  border-radius: 4px;
  background: #fff;
  margin-top: -65px;
  border: 1px solid #eee;
  height: 300px;
`;
