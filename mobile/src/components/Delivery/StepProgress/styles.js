import styled from 'styled-components/native';

import Text from '~/components/Text';

export const Container = styled.View`
  align-self: center;
  margin-top: 28px;
`;

export const StepBar = styled.View`
  width: 250px;
  height: 1px;
  margin-left: 25px;
  margin-right: 16px;
  margin-top: 0;

  background: #7d40e7;
  border: 1.5px solid #7d40e7;
`;
export const StepBallContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: -6px;
`;

export const StepBall = styled.View`
  width: 10px;
  height: 10px;

  border-radius: 50px;

  background: #7d40e7;
`;

export const StatusContainer = styled.View`
  flex-direction: column;
  align-items: center;
`;
export const DescriptionText = styled(Text)`
  margin-top: 5px;
  font-size: 10px;
  color: #999999;
  font-weight: bold;
`;
