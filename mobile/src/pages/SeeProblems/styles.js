import styled from 'styled-components/native';
import colors from '~/styles/colors';
import Text from '~/components/Text';

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
  margin-top: -60px;
`;
export const ProductName = styled(Text)`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 13px;
`;

export const ProblemView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid #dddddd;
  padding: 0 20px;
  width: 335px;
  border-radius: 4px;
  background: #fff;
  height: 55px;
`;
export const ProblemText = styled(Text)`
  font-size: 16px;
  color: #999999;
`;

export const ProblemDate = styled(Text)`
  font-size: 12px;
  color: #c1c1c1;
`;
